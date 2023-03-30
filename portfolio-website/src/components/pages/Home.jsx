import React, { Suspense, useEffect } from 'react';
import About from '../assets/About';
import HelloScene from '../scenes/HelloScene';

const Home = () => {
  return (
    <div id="home" style={{height: "100vh", width: "100%"}} className="home article flex flex-col align-center justify-center items-center">
      <div className="about flex align-center justify-center items-center">
        <About />
        <HelloScene />
      </div>
    </div>
  )
}

export default Home