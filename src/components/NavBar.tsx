import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} p={2}>
      <Image src={logo} boxSize="60px" objectFit="cover" alt="brand logo" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
