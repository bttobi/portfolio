import React from "react";
import About from "../assets/About";
import HelloScene from "../scenes/HelloScene";

const Home = () => {
  return (
    <section
      id="home"
      style={{ minHeight: "100vh", width: "100%" }}
      className="home article align-center flex flex-col content-center items-center justify-center lg:flex-row"
    >
      <About />
      <HelloScene />
    </section>
  );
};

export default Home;
