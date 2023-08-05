import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformFilter from "./components/PlatformFilter";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre;
  platform: Platform;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`, // base means mobile devices, we need only single column
          lg: `"nav nav" "sideNav main" "footer footer"`, // lg means large devices(>= 1024px) , 2 column by default
        }}
        templateColumns={{
          // assiging width for our columns
          base: "1fr", // in base, we render one column, so strech to full width using 1fr(1 fraction)
          lg: "200px 1fr", // in lg, first column: nav will be 200px and second column: main will take the rest
        }}
      >
        <GridItem area={"nav"} bg="#151515">
          <NavBar />
        </GridItem>
        <Show above={"lg"}>
          <GridItem area={"sideNav"} paddingX={2}>
            <GenreList
              selectedGenre={gameQuery.genre}
              setGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem
          area={"main"}
          bg={"#15151599"}
          color={"#FFF"}
          mt={3}
          ml={3}
          mr={3}
        >
          <PlatformFilter
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
        <GridItem area={"footer"} bg="red.400">
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
