import React, { useState, useEffect } from "react";
import { MANGA, ANIME } from "@consumet/extensions";
const animeProvider = new ANIME.Gogoanime();

export interface episode {
  id: string;
  url?: string;
  image?: string;
  cover?: string;
  rating?: number;
  releaseDate?: string;
  genre?: string[];
  [x: string]: any; // other fields
}

interface response {
  currentPage: number;
  hasNextPage: boolean;
  results: episode[];
}

const useData = ()  => {
const [data, setData] = useState<episode[]>([]);

  useEffect(() => {
    const animeList = animeProvider.fetchTopAiring().then((data) => {
      setData(data.results);
    });
  }, []);

  return data;

}
 export default useData;