import { useState, useCallback } from "react";

type FetchStatus = number | "error" | null;

type FetchLog = {
  url: string;
  payload: unknown;
  status: number | "error";
  time: string;
};

const STORAGE_KEY = "fetchLogs";

export function useFetch() {
  const [status, setStatus] = useState<FetchStatus>(null);

  const sendRequest = useCallback(
    async (url: string, payload: unknown = null): Promise<{ status: number }> => {
      try {
        const responseStatus = 200;

        setStatus(responseStatus);

        const prevLogs: FetchLog[] = JSON.parse(
          localStorage.getItem(STORAGE_KEY) || "[]"
        );

        const newLog: FetchLog = {
          url,
          payload,
          status: responseStatus,
          time: new Date().toISOString(),
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify([...prevLogs, newLog]));

        return { status: responseStatus };
      } catch (error) {
        setStatus("error");

        const prevLogs: FetchLog[] = JSON.parse(
          localStorage.getItem(STORAGE_KEY) || "[]"
        );

        const newLog: FetchLog = {
          url,
          payload,
          status: "error",
          time: new Date().toISOString(),
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify([...prevLogs, newLog]));

        throw error;
      }
    },
    []
  );

  return { status, sendRequest };
}
