import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav""aside main"`,
        }}
        gridTemplateRows={"13vh 1fr 30px"}
        gridTemplateColumns={[
          "100vw 1fr",
          "100vw 1fr",
          "100vw 1fr",
          "20vw 1fr",
          "20vw 1fr",
        ]}
        h="100vh"
        w="100vw"
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">Main</GridItem>
      </Grid>
    </div>
  );
}

export default App;
