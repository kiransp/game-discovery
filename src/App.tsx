import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`, // base means mobile devices, we need only single column
          lg: `"nav nav" "sideNav main" "footer footer"`, // lg means large devices(>= 1024px) , 2 column by default
        }}
      >
        <GridItem area={"nav"} bg="#151515">
          <NavBar />
        </GridItem>
        <Show above={"lg"}>
          <GridItem area={"sideNav"}>
            <GenreList />
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
          <GameGrid />
        </GridItem>
        <GridItem area={"footer"} bg="red.400">
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
