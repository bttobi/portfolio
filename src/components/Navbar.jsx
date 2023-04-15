import React, { useState, useRef, useEffect } from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const Navbar = () => {
  const hamburgerRef = useRef();
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);
  
  const changeVisibility = () => {
    setHamburgerIsActive(!hamburgerIsActive);
  }


  const handleAnimation = (e) => {
    e.stopPropagation();
    if(hamburgerRef?.current && !hamburgerRef?.current.contains(e.target)){
      console.log("outside")
      setHamburgerIsActive(false);
      hamburgerRef.current.checked = false;
    }
  }

  console.log(hamburgerRef?.current?.checked)

  useEffect(()=>{
    window.addEventListener('click', e => handleAnimation(e));
    return window.removeEventListener('click', e => handleAnimation(e));
  }, []);

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
          <a href="https://drive.google.com/file/d/1tYGYaCDJRz65o8d_DsCLQelY7daV0U7u/view?usp=sharing" target="_blank" download className="nav-button contacts-link p-1 rounded-lg hidden lg:block mr-4">RESUME</a>
        </button>
      </div>
      <label className="hamburger-btn w-full h-3/4 rounded-lg cursor-pointer m-0 p-0">
        <input aria-label="Open hamburger menu" className="hamburger-btn w-full h-full cursor-pointer absolute z-20 p-0 m-0" onChange={changeVisibility} ref={hamburgerRef} type="checkbox"/>
      </label>
      <AnimatePresence>
        {hamburgerIsActive &&
        <motion.div className="cursor-pointer" initial={{y: "-4rem", opacity: 0}} animate={{y: "0rem", opacity: 1}} exit={{y: "-4rem", opacity: 0}}>
          <ul className="hamburger-menu text-lg lg:hidden absolute right-0 p-4 mt-64 shadow rounded-box w-48 flex flex-col text-center justify-center items-center bg-blue-darker">
            <li className="menu-item flex rounded-lg bg-slate-600 w-full h-full mb-2">
                <a aria-label="Go to about section" href="#home" className="text-center w-full h-full p-1">About</a>
            </li>
            <li className="menu-item flex rounded-lg bg-slate-600 w-full h-full mb-2">
                <a aria-label="Go to projects section" href="#projects" className="text-center w-full h-full p-1">Projects</a>
            </li>
            <li className="menu-item flex rounded-lg bg-slate-600 w-full h-full mb-2">
                <a aria-label="Go to contact section" href="#contact" className="text-center w-full h-full p-1">Contact</a>
            </li>
            <li className="menu-item flex rounded-lg bg-slate-600 w-full h-full">
              <a aria-label="Download resume" href="https://drive.google.com/file/d/1tYGYaCDJRz65o8d_DsCLQelY7daV0U7u/view?usp=sharing" target="_blank" className="text-center w-full h-full p-1">Resume</a>
            </li>
          </ul>
        </motion.div>}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar