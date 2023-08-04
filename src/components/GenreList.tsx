import { List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreItem from "./GenreItem";

function GenreList() {
  const { data: genres, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {genres?.map((genre) => (
          <GenreItem genre={genre} />
        ))}
      </List>
    </>
  );
}

export default GenreList;
