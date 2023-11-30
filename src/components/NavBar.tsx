import React from "react";

import SearchBar from "./searchBar"; //component import

import { HStack, Image, Text } from "@chakra-ui/react"; //chakra UI component

import luffy from "../assets/luffyIcon.png";

const NavBar = () => {
  return (
    <HStack paddingLeft="20px" pr={10} h={140} justifyContent={"space-between"}>
      <HStack>
        <Image src={luffy} boxSize={["60px", "80px", "100px"]}></Image>
        <Text>ANIMEHUB</Text>
      </HStack>
      <SearchBar />
    </HStack>
  );
};
export default NavBar;
