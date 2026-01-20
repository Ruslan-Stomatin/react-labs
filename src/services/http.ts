const BASE = import.meta.env.VITE_API_BASE as string | undefined;

type ApiErrorDetails = {
  status?: number | null;
  payload?: unknown;
};

export class ApiError extends Error {
  status: number | null;
  payload: unknown;

  constructor(message: string, details: ApiErrorDetails = {}) {
    super(message);
    this.name = "ApiError";
    this.status = details.status ?? null;
    this.payload = details.payload ?? null;
  }
}

type QueryParams = Record<string, string | number | boolean | null | undefined>;

function buildUrl(path: string = "", params?: QueryParams): string {
  if (!BASE) {
    throw new ApiError("VITE_API_BASE is not set");
  }

  const fullPath = `api/v1/${String(path).replace(/^\/+/, "")}`;
  const url = new URL(fullPath, BASE);

  if (params && typeof params === "object") {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
    });
  }

  return url.toString();
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type FetchJsonOptions = {
  method?: HttpMethod;
  params?: QueryParams;
  body?: unknown;
  headers?: Record<string, string>;
  timeout?: number;
  retries?: number;
  signal?: AbortSignal;
};

function toErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  return "Network error";
}

function isNetworkFailure(err: unknown): boolean {
  if (!(err instanceof Error)) return false;
  return err.name === "TypeError" || err.message.includes("Network");
}

export async function fetchJson<T = unknown>(
  path: string,
  {
    method = "GET",
    params,
    body,
    headers,
    timeout = 10000,
    retries = 0,
    signal,
  }: FetchJsonOptions = {}
): Promise<T> {
  const url = /^https?:\/\//i.test(path) ? path : buildUrl(path, params);

  console.log("[HTTP] ->", method, url);

  let attempt = 0;

  while (true) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeout);

    const linkAbort = () => ctrl.abort();
    if (signal) signal.addEventListener("abort", linkAbort, { once: true });

    try {
      const res = await fetch(url, {
        method,
        headers: {
          Accept: "application/json",
          ...(body ? { "Content-Type": "application/json" } : {}),
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: ctrl.signal,
      });

      clearTimeout(timer);

      const ctype = res.headers.get("content-type") || "";
      const isJson = ctype.includes("application/json");

      if (!res.ok) {
        let payload: unknown = null;
        try {
          payload = isJson ? await res.json() : await res.text();
        } catch {
        }

        throw new ApiError(`HTTP ${res.status} ${res.statusText}`, {
          status: res.status,
          payload,
        });
      }

      const data = (isJson ? await res.json() : await res.text()) as T;
      return data;
    } catch (err: unknown) {
      clearTimeout(timer);

      const isAbort = err instanceof Error && err.name === "AbortError";
      const canRetry = !isAbort && isNetworkFailure(err) && attempt < retries;

      if (canRetry) {
        attempt += 1;
        continue;
      }

      if (err instanceof ApiError) throw err;
      throw new ApiError(toErrorMessage(err));
    } finally {
      if (signal) signal.removeEventListener("abort", linkAbort);
    }
  }
}

export const http = {
  get: <T = unknown>(p: string, o?: Omit<FetchJsonOptions, "method">) =>
    fetchJson<T>(p, { ...o, method: "GET" }),
  post: <T = unknown>(p: string, o?: Omit<FetchJsonOptions, "method">) =>
    fetchJson<T>(p, { ...o, method: "POST" }),
  put: <T = unknown>(p: string, o?: Omit<FetchJsonOptions, "method">) =>
    fetchJson<T>(p, { ...o, method: "PUT" }),
  del: <T = unknown>(p: string, o?: Omit<FetchJsonOptions, "method">) =>
    fetchJson<T>(p, { ...o, method: "DELETE" }),
};
