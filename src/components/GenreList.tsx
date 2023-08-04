import { List, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreItem from "./GenreItem";

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
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
