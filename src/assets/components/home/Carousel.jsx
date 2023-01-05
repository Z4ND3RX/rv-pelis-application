import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";
import PelisContext from "../../../context/PelisContext";
import ActionCard from "./ActionCard";
import Banner from "./Banner";

function CarouselX() {
  const { movies } = useContext(PelisContext);
  const { URL_IMAGE } = React.useContext(PelisContext);
  return (
    <>
      <Carousel>
        {movies.map((movie) => (
            <Banner key={movie.id} movie={movie}/>
        ))}
      </Carousel>
    </>
  );
}

export default CarouselX;
