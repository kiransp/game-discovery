import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  onSearchInput: (searchStr: string) => void;
}

function NavBar({ onSearchInput }: Props) {
  return (
    <HStack p={2}>
      <Image src={logo} boxSize="60px" objectFit="cover" alt="brand logo" />
      <SearchBar onSearchInput={onSearchInput} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
