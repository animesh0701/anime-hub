import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons"; //Chakra Ui imports

const SearchBar = () => {
  return (
    <>
      <InputGroup borderRadius={5} size="lg" w={[200, 230, 250]}>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="grey" />}
        />
        <Input
          type="text"
          color={"grey"}
          placeholder="Search..."
          border="1px solid grey"
        />
      </InputGroup>
    </>
  );
};

export default SearchBar;
