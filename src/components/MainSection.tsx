import React from "react";
import { SimpleGrid } from "@chakra-ui/react"; //chakra UI component

import useData from "../user-services/consumet-anime";
import AnimeCard from "./AnimeCard";
import SkeletonCard from "./SkeletonCard";

const MainSection = () => {
  const { data, loading, error } = useData();
  const skeletons = [1, 2, 3, 4, 5, 6]; // a dummy array to just iterate over

  return (
    <SimpleGrid columns={[2, 2, 3, 4, 5]} spacing={6} px={10}>
      {loading && skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {data.map((data) => (
        <AnimeCard key={data.id} anime={data} />
      ))}
    </SimpleGrid>
  );
};

export default MainSection;
