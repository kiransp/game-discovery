import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformFilter = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();
  if (error) return;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
        {selectedPlatform?.id ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.slug}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformFilter;
