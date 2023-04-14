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
      <div className="home-wrapper h-full w-min flex justify-between grow whitespace-nowrap">
        <button aria-label="Go to about section">
          <a href="#home" className="name-surname home-page w-16 lg:w-min font-bold lg:ml-6 flex align-center justify-center items-center">
            <img className="logo ml-0 lg:ml-4" src="https://i.imgur.com/otXNjSw.png" alt="bartosz tobinski logo picture" width="60px"/>
            <p className="nav-button active-nav name-and-surname ml-4 p-1 hidden lg:block rounded-lg">BARTOSZ TOBIŃSKI</p>
          </a>
        </button>
        <button aria-label="Go to projects section">
          <a href="#projects" className="nav-button projects-link p-1 rounded-lg hidden lg:block">PROJECTS</a>
        </button>
        <button aria-label="Go to contact section">
          <a href="#contact" className="nav-button contacts-link p-1 rounded-lg hidden lg:block">CONTACT</a>
        </button>
        <button aria-label="Download resume">
          <a href="logo.png" download className="nav-button contacts-link p-1 rounded-lg hidden lg:block mr-4">RESUME</a>
        </button>
      </div>
      <label className="hamburger-btn mr-1 h-3/4 rounded-lg lg:hidden cursor-pointer">
        <input aria-label="Open hamburger menu" className="cursor-pointer absolute" ref={hamburgerRef} onChange={changeVisibility} type="checkbox"/>
      </label>
      <AnimatePresence>
        {hamburgerIsActive &&
        <motion.div className="cursor-pointer" initial={{y: "-4rem", opacity: 0}} animate={{y: "0rem", opacity: 1}} exit={{y: "-4rem", opacity: 0}}>
          <ul className="hamburger-menu text-lg lg:hidden absolute right-0 p-2 py-4 mt-64 shadow rounded-box w-48 flex flex-col text-center justify-center items-center bg-blue-darker">
            <li className="flex rounded-lg bg-slate-600 w-40 mb-2">
              <button aria-label="Go to about section" className="menu-item p-1 w-full h-full">
                <a href="#home" className="w-full h-full">About</a>
              </button>
            </li>
            <li className="flex rounded-lg bg-slate-600 w-40 mb-2">
              <button aria-label="Go to projects section" className="menu-item p-1 w-full h-full">
                <a href="#projects" className="w-full h-full">Projects</a>
              </button>
            </li>
            <li className="flex rounded-lg bg-slate-600 w-40 mb-2">
              <button aria-label="Go to contact section" className="menu-item p-1 w-full h-full">
                <a href="#contact" className="w-full h-full">Contact</a>
              </button>
            </li>
            <li className="flex rounded-lg bg-slate-600 w-40">
              <button aria-label="Download resume" className="menu-item p-1 w-full h-full">
                <a href="logo.png" className="w-full h-full">Resume</a>
              </button>
            </li>
          </ul>
        </motion.div>}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar