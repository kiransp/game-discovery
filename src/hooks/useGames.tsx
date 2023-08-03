import { useEffect, useState } from "react";
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
    ApiClient()
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        setError("");
      })
      .catch((err) => setError(err.message));
  }, []);

  return { games, error };
}

export default useGames;
