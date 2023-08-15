import React from "react";
import CarouselX from "./home/Carousel";
import Footer from "./ends/Footer";
import NavBar from "./ends/NavBar";
import MovieList from "./home/MovieList";
import SearchField from "./home/SearchField";

function Home() {
  return (
    <>
      <NavBar />
      <SearchField />
      <CarouselX />
      <MovieList />
      <Footer />
    </>
  );
}

export default Home;
