import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import GameScore from "./GameScore";
import cropImageUrl from "../services/image-url";
import Emojis from "./Emojis";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card>
        <Image
          src={cropImageUrl(game.background_image)}
          objectFit="cover"
          alt={game.name}
        />
        <CardBody bg={"#202020"}>
          <HStack justifyContent={"space-between"} mb={3}>
            <PlatformIconsList
              platforms={game.parent_platforms.map(({ platform }) => platform)}
            />
            <GameScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"} color="#FFF">
            {game.name}
          </Heading>
          <Emojis rating={game.rating_top} />
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
