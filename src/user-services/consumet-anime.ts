import React, { useState, useEffect } from "react";
import { MANGA, ANIME, META } from "@consumet/extensions";
const animeProvider = new META.Anilist();

export interface ITitle {
    romaji?: string;
    english?: string;
    native?: string;
    userPreferred?: string;
  }

export interface episode {
  id: string;
  url?: string;
  title?: string | ITitle;
  image?: string;
  cover?: string;
  rating?: number;
  releaseDate?: string;
  genre?: string[];
  totalEpisodes?: number;
  [x: string]: any; // other fields
}

interface response {
  currentPage: number;
  hasNextPage: boolean;
  results: episode[];
}


const useData = ()  => {
const [data, setData] = useState<episode[]>([]);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
 
  animeProvider.fetchPopularAnime(1,36).then((res) => {
    setData(res.results);
    setLoading(false);
  }).catch((error) => {
      setError(error.message);
        setLoading(false);});
}, []);

  return {data,loading,error};

}
 export default useData;