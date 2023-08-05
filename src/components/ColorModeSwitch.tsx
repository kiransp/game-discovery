import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="red"
      />
      <Text color="#FFF" whiteSpace="nowrap">
        Dark Mode
      </Text>
    </HStack>
  );
}

export default ColorModeSwitch;
