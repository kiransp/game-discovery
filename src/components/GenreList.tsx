import { List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";

interface Props {
  setGenre: (genre: Genre) => void;
}

function GenreList({ setGenre }: Props) {
  const { data: genres, error, isLoading } = useGenres();
  // const [selectedGenre, setGenre] = useState("");
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text>{error}</Text>}

      <List>
        {genres?.map((genre) => (
          <ListItem
            onClick={() => {
              setGenre(genre);
            }}
          >
            <GenreItem genre={genre} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
