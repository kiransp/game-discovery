import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} p={3}>
        {games && games.map((gameItem) => <GameCard game={gameItem} />)}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
