import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar backdrop-blur-sm bg-white/5 flex flex-row align-center justify-start fixed m-0 p-0 text-white w-full h-20 z-20 text-4xl">
      <div className="home-wrapper h-full flex grow whitespace-nowrap">
        <img src="./logo.png" alt="bartosz tobinski logo picture" width="70px"/>
        <NavLink to="/" className="name-surname home-page font-bold ml-6">BARTOSZ TOBIŃSKI</NavLink>
      </div>
      <div className="navlinks-wrapper h-full flex flex-row w-full justify-around">
        <NavLink to="/projects" className="projects-link">PROJECTS</NavLink>
        <NavLink to="/contact" className="contacts-link">CONTACT</NavLink>
      </div>
    </nav>
  )
}

export default Navbar