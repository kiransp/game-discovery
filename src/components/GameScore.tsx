import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function GameScore({ score }: Props) {
  return (
    <Badge colorScheme="green" paddingX={2}>
      {score}
    </Badge>
  );
}

export default GameScore;
