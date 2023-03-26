import React, { Suspense, useEffect } from 'react';
import About from '../assets/About';
import PlanetScene from '../scenes/PlanetScene';

const Home = () => {
  return (
    <div id="home" className="home w-full h-full flex flex-col align-center justify-center items-center">
      <div className="about flex align-center justify-center items-center">
        <About />
        <PlanetScene />
      </div>
    </div>
  )
}

export default Home