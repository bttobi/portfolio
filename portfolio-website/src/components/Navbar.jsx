import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  return (
    <nav className="navbar backdrop-blur-sm bg-white/10 flex flex-row align-center justify-start fixed m-0 p-0 text-white w-full h-10 z-20 text-3xl">
      <div className="home-wrapper h-full flex justify-center grow whitespace-nowrap">
        <a href="#home" className="name-surname home-page font-bold ml-6 flex align-center justify-center items-center">
          <img className="logo ml-4" src="./logo.png" alt="bartosz tobinski logo picture" width="60px"/>
          <p className="nav-button name-and-surname ml-4 p-1 hidden lg:block rounded-lg">BARTOSZ TOBIŃSKI</p>
        </a>
      </div>
      <div className="navlinks-wrapper h-full flex flex-row w-full justify-around">
        <a href="#projects" className="nav-button projects-link p-1 rounded-lg hidden lg:block">PROJECTS</a>
        <a href="#contact" className="nav-button contacts-link p-1 rounded-lg hidden lg:block">CONTACT</a>
        <a href="logo.png" download className="nav-button contacts-link p-1 rounded-lg hidden lg:block">RESUME</a>
      </div>
        <div className="hamburger-menu block lg:hidden">
          <GiHamburgerMenu />
        </div>
    </nav>
  )
}

export default Navbar