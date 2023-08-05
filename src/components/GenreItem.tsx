import { Button, HStack, Image } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  genre: Genre;
  selectedGenre: Genre | null;
}

const GenreItem = ({ genre, selectedGenre }: Props) => {
  return (
    <>
      <HStack padding={2}>
        <Image
          src={genre.image_background}
          boxSize="40px"
          objectFit="cover"
          borderRadius={10}
        />
        <Button
          variant="link"
          whiteSpace="normal"
          textAlign="left"
          fontSize={genre.slug === selectedGenre?.slug ? "20px" : "15px"}
        >
          {genre.name}
        </Button>
      </HStack>
    </>
  );
};

export default GenreItem;
