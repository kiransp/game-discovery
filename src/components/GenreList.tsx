import { List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreItem from "./GenreItem";

interface Props {
  setGenre: (genre: string) => void;
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
              console.log("selected : ", genre.slug);
              setGenre(genre.slug);
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
