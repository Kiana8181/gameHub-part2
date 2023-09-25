import {
  Box,
  Button,
  HStack,
  Image,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, useLocation, useParams } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  onOpen?: () => void;
}

export const NavBar = ({ onOpen }: Props) => {
  const { pathname } = useLocation();

  return (
    <HStack padding="10px">
      <Box hidden={pathname !== "/"}>
        <Show below="lg">
          <GiHamburgerMenu size="40" onClick={onOpen} cursor="pointer" />
        </Show>
      </Box>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="contain"></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
