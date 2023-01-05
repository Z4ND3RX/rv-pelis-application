import React, { useContext } from "react";
import { Grid } from "@mui/material";
import ActionCard from "./ActionCard";
import PelisContext from "../../../context/PelisContext";

function MovieList() {
  const { movies } = useContext(PelisContext);
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {movies.map((movie) => (
          <ActionCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </>
  );
}

export default MovieList;
