import { Box, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <Box padding={{ base: 0, md: 5 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
