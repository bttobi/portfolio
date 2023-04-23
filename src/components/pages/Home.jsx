import React from 'react';
import About from '../assets/About';
import HelloScene from '../scenes/HelloScene';

const Home = () => {
  return (
    <section id="home" style={{minHeight: "100vh", width: "100%"}} className="home article flex flex-col lg:flex-row justify-center align-center content-center items-center">
        <About />
        <HelloScene />
    </section>
  )
}

export default Home