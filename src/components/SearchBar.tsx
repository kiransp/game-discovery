import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchInput: (searchString: string) => void;
}

const SearchBar = ({ onSearchInput }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) onSearchInput(inputRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch color="gray.300" />
        </InputLeftElement>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search games..."
          variant={"filled"}
          borderRadius={50}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
