import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import GameScore from "./GameScore";
import cropImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"} bg="#202020">
        <Image
          src={cropImageUrl(game.background_image)}
          objectFit="cover"
          alt={game.name}
        />
        <CardBody>
          <Heading fontSize={"2xl"} color="#FFF">
            {game.name}
          </Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconsList
              platforms={game.parent_platforms.map(({ platform }) => platform)}
            />
            <GameScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
