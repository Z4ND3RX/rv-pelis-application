import React, { createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const PelisContext = createContext();

export function PelisContextProvider(props) {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "2e677abb81f609787f748dc2bcbd2738";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // VARIABLES DE ESTADO API
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);

  // FUNCION DE PETICION GET -> API
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results);
    setMovie(results[0]);
  };

  // filtrar peliculas
  const searchMovies = () => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <PelisContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        movies,
        URL_IMAGE,
        setSearchKey,
        searchMovies,
        searchKey,
      }}
    >
      {props.children}
    </PelisContext.Provider>
  );
}

export default PelisContext;
