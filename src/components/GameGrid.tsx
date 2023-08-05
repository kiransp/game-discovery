import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={5} p={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <CardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games &&
          games.map((gameItem) => (
            <GameCardContainer key={gameItem.id}>
              <GameCard game={gameItem} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
