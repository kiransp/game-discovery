import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatformIconsList({ platforms }: Props) {
  const iconsMapping: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platforms.map(({ slug }) => (
        <Icon as={iconsMapping[slug]} />
      ))}
    </HStack>
  );
}

export default PlatformIconsList;
