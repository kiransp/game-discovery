import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("COLOR ", colorMode, colorMode === "dark");
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="red"
      />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
