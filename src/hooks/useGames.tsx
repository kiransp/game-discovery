import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import ApiClient from "../services/api-clinet";

interface Games {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

function useGames() {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    ApiClient()
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setError("");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
}

export default useGames;
