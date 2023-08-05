import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";

interface Props {
  onSortSelection: (sortBy: string) => void;
  selectedSort: string;
}

const SortSelector = ({ onSortSelection, selectedSort }: Props) => {
  const { colorMode } = useColorMode();
  const sortingFields = [
    {
      value: "",
      name: "Relevance",
    },
    {
      value: "name",
      name: "Name",
    },
    {
      value: "released",
      name: "Released",
    },
    {
      value: "added",
      name: "Added",
    },
    {
      value: "created",
      name: "Created",
    },
    {
      value: "updated",
      name: "Updated",
    },
    {
      value: "rating",
      name: "Rating",
    },
    {
      value: "metacritic",
      name: "Metacritic",
    },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
        {selectedSort ? "Order by: " + selectedSort : "Order by: Relevance"}
      </MenuButton>
      <MenuList>
        {sortingFields.map(({ name, value }) => (
          <MenuItem
            color={colorMode === "dark" ? "#FFF" : "#000"}
            key={name}
            value={value}
            onClick={() => onSortSelection(name)}
          >
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
