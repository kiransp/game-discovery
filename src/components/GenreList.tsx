import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {genres?.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;
