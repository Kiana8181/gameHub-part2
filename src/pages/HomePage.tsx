import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  Flex,
  Grid,
  GridItem,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { GameGrid } from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import { GenreList } from "../components/GenreList";
import { PlatformSelector } from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import { NavBar } from "../components/NavBar";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavBar onOpen={onOpen} />
      <Grid
        templateAreas={{
          lg: `"aside main"`,
          base: `"main"`,
        }}
        templateColumns={{
          lg: "200px 1fr",
          base: "1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerContent pt={10}>
            <DrawerCloseButton />
            <GridItem area="aside" paddingX={5}>
              <GenreList />
            </GridItem>
          </DrawerContent>
        </Drawer>

        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>

          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
