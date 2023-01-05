import React from "react";
import NavBar from "./ends/NavBar";
import Welcome from "./begin/Welcome";
import Services from "./begin/Services";
import Retry from "./begin/Retry";
import Footer from "./ends/Footer"

function Begin() {
  return (
    <>
      <NavBar />
      <Welcome />
      <Services />
      <Retry />
      <Footer/>
    </>
  );
}

export default Begin;
