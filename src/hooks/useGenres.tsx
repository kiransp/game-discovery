import { useEffect, useState } from "react";
import ApiClient from "../services/api-clinet";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

interface FetchGenreResponse {
  count: string;
  results: Genre[];
}
function useGenres() {
  const [genres, setGenres] = useState<Genre[]>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    ApiClient()
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
}

export default useGenres;
