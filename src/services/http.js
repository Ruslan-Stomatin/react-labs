const BASE = import.meta.env.VITE_API_BASE;

export class ApiError extends Error {
  constructor(message, { status, payload } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status ?? null;
    this.payload = payload ?? null;
  }
}

function buildUrl(path = "", params) {
  const fullPath = `api/v1/${String(path).replace(/^\/+/, "")}`;

  const url = new URL(fullPath, BASE);

  if (params && typeof params === "object") {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
    });
  }
  return url.toString();
}

export async function fetchJson(
  path,
  {
    method = "GET",
    params,
    body,
    headers,
    timeout = 10000,
    retries = 0,
    signal,
  } = {}
) {
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
        let payload = null;
        try {
          payload = isJson ? await res.json() : await res.text();
        } catch {
          /* just space because of the error in the IDE in the catch */
        }
        throw new ApiError(`HTTP ${res.status} ${res.statusText}`, {
          status: res.status,
          payload,
        });
      }

      return isJson ? res.json() : res.text();
    } catch (err) {
      clearTimeout(timer);
      const isAbort = err?.name === "AbortError";
      const netFail =
        err?.name === "TypeError" || err?.message?.includes("Network");
      const canRetry = !isAbort && netFail && attempt < retries;
      if (canRetry) {
        attempt += 1;
        continue;
      }
      if (err instanceof ApiError) throw err;
      throw new ApiError(err.message || "Network error");
    } finally {
      if (signal) signal.removeEventListener("abort", linkAbort);
    }
  }
}

export const http = {
  get: (p, o) => fetchJson(p, { ...o, method: "GET" }),
  post: (p, o) => fetchJson(p, { ...o, method: "POST" }),
  put: (p, o) => fetchJson(p, { ...o, method: "PUT" }),
  del: (p, o) => fetchJson(p, { ...o, method: "DELETE" }),
};
