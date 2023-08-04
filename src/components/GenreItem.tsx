import { HStack, Image, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  return (
    <HStack padding={2}>
      <Image src={genre.image_background} boxSize="40px" borderRadius={10} />
      <Text fontSize="large">{genre.name}</Text>
    </HStack>
  );
};

export default GenreItem;
