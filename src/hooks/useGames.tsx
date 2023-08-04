import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import ApiClient from "../services/api-clinet";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
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
