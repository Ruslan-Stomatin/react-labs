import { useState, useCallback } from "react";

export function useFetch() {
  const [status, setStatus] = useState(null);

  const sendRequest = useCallback(async (url, payload = null) => {
    try {
      const responseStatus = 200;

      setStatus(responseStatus);

      const prevLogs = JSON.parse(localStorage.getItem("fetchLogs") || "[]");

      const newLog = {
        url,
        payload,
        status: responseStatus,
        time: new Date().toISOString(),
      };

      localStorage.setItem("fetchLogs", JSON.stringify([...prevLogs, newLog]));

      return { status: responseStatus };
    } catch (error) {
      setStatus("error");

      const prevLogs = JSON.parse(localStorage.getItem("fetchLogs") || "[]");
      const newLog = {
        url,
        payload,
        status: "error",
        time: new Date().toISOString(),
      };

      localStorage.setItem("fetchLogs", JSON.stringify([...prevLogs, newLog]));

      throw error;
    }
  }, []);

  return { status, sendRequest };
}
