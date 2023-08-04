import { Button, HStack, Image } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  return (
    <HStack padding={2}>
      <Image src={genre.image_background} boxSize="40px" borderRadius={10} />
      <Button variant="link">{genre.name}</Button>
    </HStack>
  );
};

export default GenreItem;
