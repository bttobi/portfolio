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
      <div className="home-wrapper h-full w-min flex justify-center grow whitespace-nowrap">
        <a href="#home" className="name-surname home-page w-16 lg:w-min font-bold lg:ml-6 flex align-center justify-center items-center">
          <img className="logo ml-0 lg:ml-4" src="./logo.png" alt="bartosz tobinski logo picture" width="60px"/>
          <p className="nav-button name-and-surname ml-4 p-1 hidden lg:block rounded-lg">BARTOSZ TOBIŃSKI</p>
        </a>
      </div>
      <div className="navlinks-wrapper h-full flex flex-row w-full justify-around">
        <a href="#projects" className="nav-button projects-link p-1 rounded-lg hidden lg:block">PROJECTS</a>
        <a href="#contact" className="nav-button contacts-link p-1 rounded-lg hidden lg:block">CONTACT</a>
        <a href="logo.png" download className="nav-button contacts-link p-1 rounded-lg hidden lg:block">RESUME</a>
      </div>
      <label className="hamburger-btn mr-1 h-3/4 rounded-lg lg:hidden cursor-pointer">
        <input className="cursor-pointer absolute" ref={hamburgerRef} onChange={changeVisibility} type="checkbox"/>
      </label>
      <AnimatePresence>
        {hamburgerIsActive &&
        <motion.div className="cursor-pointer" initial={{y: "-4rem", opacity: 0}} animate={{y: "0rem", opacity: 1}} exit={{y: "-4rem", opacity: 0}}>
          <ul className="hamburger-menu text-lg lg:hidden absolute right-0 p-2 mt-64 shadow rounded-box w-48 flex flex-col text-center justify-center items-center bg-blue-darker">
            <a href="#home"><li className="menu-item p-1 rounded-lg bg-slate-600 w-40 mb-2">About</li></a>
            <a href="#projects"><li className="menu-item p-1 rounded-lg bg-slate-600 w-40 mb-2">Projects</li></a>
            <a href="#contact"><li className="menu-item p-1 rounded-lg bg-slate-600 w-40 mb-2">Contact</li></a>
            <a href="logo.png"><li className="menu-item p-1 rounded-lg bg-slate-600 w-40">Resume</li></a>
          </ul>
        </motion.div>}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar