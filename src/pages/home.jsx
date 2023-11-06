import React from "react";
import NavBar from "../components/layout/NavBar";
import Transform from "../components/home/Transform";
import About from "../components/home/About";
import Companies from "../components/home/Companies";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Transform />
      <About />
      <Companies />
    </>
  );
};

export default HomePage;
