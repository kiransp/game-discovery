import { useEffect, useState } from "react";
import ApiClient from "../services/api-clinet";
import { Text } from "@chakra-ui/react";
interface Games {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

function GameGrid() {
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
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games && games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
}

export default GameGrid;
