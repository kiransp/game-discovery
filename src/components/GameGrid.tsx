import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} p={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <CardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games &&
          games.map((gameItem) => (
            <GameCardContainer>
              <GameCard game={gameItem} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
