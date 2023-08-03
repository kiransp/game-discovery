import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`, // base means mobile devices, we need only single column
          lg: `"nav nav" "sideNav main" "footer footer"`, // lg means large devices(>= 1024px) , 2 column by default
        }}
      >
        <GridItem area={"nav"} bg="red">
          Nav
        </GridItem>
        <Show above={"lg"}>
          <GridItem area={"sideNav"} bg="gold">
            Side nav
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"silver"} color={"#FFF"}>
          Main
        </GridItem>
        <GridItem area={"footer"} bg="red.400">
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
