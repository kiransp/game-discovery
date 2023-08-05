import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQueries: GameQuery;
}

const GameHeading = ({ gameQueries }: Props) => {
  const heading = `${gameQueries.platform?.name || ""} ${
    gameQueries.genre?.name || ""
  } Games`;

  return <Heading mb={5}>{heading}</Heading>;
};

export default GameHeading;
