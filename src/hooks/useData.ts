import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import ApiClient from "../services/api-clinet";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(
  endpoint: string,
  reqConfig?: AxiosRequestConfig,
  deps?: unknown[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      ApiClient()
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...reqConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
          setError("");
        })
        .catch((err) => {
          setLoading(false);
          if (err instanceof CanceledError) return;
          setError(err.message);
        });

      return () => controller.abort();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
}

export default useData;
