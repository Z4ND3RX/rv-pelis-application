import React from "react";
import CarouselX from "./home/Carousel";
import Footer from "./ends/Footer";
import NavBar from "./ends/NavBar";
import MovieList from "./home/MovieList";

function Home() {
  return (
    <>
      <NavBar />
      <CarouselX />
      <MovieList />
      <Footer />
    </>
  );
}

export default Home;
