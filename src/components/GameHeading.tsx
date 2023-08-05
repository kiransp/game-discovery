import { Heading, useColorMode } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQueries: GameQuery;
}

const GameHeading = ({ gameQueries }: Props) => {
  const { colorMode } = useColorMode();
  const heading = `${gameQueries.platform?.name || ""} ${
    gameQueries.genre?.name || ""
  } Games`;

  return (
    <Heading as="h2" mb={5} color={colorMode === "dark" ? "#FFF" : "#000"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
