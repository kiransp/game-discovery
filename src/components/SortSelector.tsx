import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";

const SortSelector = () => {
  const sortingFields = [
    "name",
    "released",
    "added",
    "created",
    "updated",
    "rating",
    "metacritic",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
        Orber by
      </MenuButton>
      <MenuList>
        {sortingFields.map((field) => (
          <MenuItem
            key={field}
            value={field}
            onClick={() => console.log("field : ", field)}
          >
            {field}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
