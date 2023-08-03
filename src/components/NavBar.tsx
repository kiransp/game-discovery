import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Spacer,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("COLOR MODE ", colorMode);
  return (
    <Flex alignItems="center">
      <HStack>
        <Image src={logo} boxSize="60px" objectFit="cover" alt="brand logo" />
        <Text color="#FFF" fontSize={"2xl"}>
          Game Nav
        </Text>
      </HStack>
      <Spacer />
      <HStack>
        <FormControl display="flex">
          <Switch id="colorMode" onChange={toggleColorMode} />
          <FormLabel htmlFor="colorMode" ml="2" color="#FFF">
            Dark Mode
          </FormLabel>
        </FormControl>
      </HStack>
    </Flex>
  );
}

export default NavBar;
