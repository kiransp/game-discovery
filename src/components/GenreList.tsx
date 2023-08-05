import { List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";

interface Props {
  setGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ setGenre, selectedGenre }: Props) {
  const { data: genres, error, isLoading } = useGenres();
  // const [selectedGenre, setGenre] = useState("");
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text>{error}</Text>}

      <List>
        {genres?.map((genre) => (
          <ListItem
            key={genre.id}
            onClick={() => {
              setGenre(genre);
            }}
          >
            <GenreItem genre={genre} selectedGenre={selectedGenre} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
