import React, { useState, useRef } from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const Navbar = () => {
  const hamburgerRef = useRef();
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);
  const changeVisibility = () => {
    setHamburgerIsActive(hamburgerRef?.current?.checked)
  }
  return (
    <nav className="navbar backdrop-blur-sm bg-white/10 flex flex-row align-center justify-start fixed m-0 p-0 text-white w-full h-10 z-20 text-3xl">
      <div className="home-wrapper h-full flex justify-center grow whitespace-nowrap">
        <a href="#home" className="name-surname home-page font-bold ml-6 flex align-center justify-center items-center">
          <img className="logo lg:ml-4" src="./logo.png" alt="bartosz tobinski logo picture" width="60px"/>
          <p className="nav-button name-and-surname ml-4 p-1 hidden lg:block rounded-lg">BARTOSZ TOBIŃSKI</p>
        </a>
      </div>
      <div className="navlinks-wrapper h-full flex flex-row w-full justify-around">
        <a href="#projects" className="nav-button projects-link p-1 rounded-lg hidden lg:block">PROJECTS</a>
        <a href="#contact" className="nav-button contacts-link p-1 rounded-lg hidden lg:block">CONTACT</a>
        <a href="logo.png" download className="nav-button contacts-link p-1 rounded-lg hidden lg:block">RESUME</a>
      </div>
      <input ref={hamburgerRef} onChange={changeVisibility} type="checkbox" className="hamburger-btn btn btn-ghost mr-4 hamburger-menu lg:hidden flex justify-end items-end" />
      <AnimatePresence>
        {hamburgerIsActive &&
        <motion.div initial={{transform: "scale(0)", opacity: 0}} animate={{transform: "scale(1)", opacity: 1}} exit={{transform: "scale(0)", opacity: 0}}>
          <ul className="hamburger-menu text-lg absolute right-0 p-2 mt-64 shadow rounded-box w-48 flex flex-col text-center justify-center items-center" style={{backgroundColor: "#222831"}}>
            <li className="p-1 rounded-lg bg-slate-600 w-40 mb-2"><a href="#home">About</a></li>
            <li className="p-1 rounded-lg bg-slate-600 w-40 mb-2"><a href="#projects">Projects</a></li>
            <li className="p-1 rounded-lg bg-slate-600 w-40 mb-2"><a href="#contact">Contact</a></li>
            <li className="p-1 rounded-lg bg-slate-600 w-40"><a href="logo.png">Resume</a></li>
          </ul>
        </motion.div>}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar