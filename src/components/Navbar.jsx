import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const hamburgerRef = useRef();
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);

  const changeVisibility = () => {
    setHamburgerIsActive(!hamburgerIsActive);
  };

  const handleAnimation = (e) => {
    e.stopPropagation();
    if (hamburgerRef?.current && !hamburgerRef?.current.contains(e.target)) {
      setHamburgerIsActive(false);
      hamburgerRef.current.firstChild.checked = false;
    }
  };

  useEffect(() => {
    window.addEventListener("click", (e) => handleAnimation(e));
    return window.removeEventListener("click", (e) => handleAnimation(e));
  }, []);

  return (
    <nav className="align-center navbar fixed z-20 m-0 flex h-10 w-full flex-row justify-start bg-white/10 p-0 text-3xl text-white backdrop-blur-sm">
      <div className="home-wrapper flex h-full w-min grow justify-between whitespace-nowrap">
        <button aria-label="Go to about section">
          <a
            href="#home"
            className="name-surname home-page align-center flex w-16 items-center justify-center lg:ml-6 lg:w-min"
          >
            <img
              className="logo ml-0 lg:ml-4"
              src="https://i.imgur.com/otXNjSw.png"
              alt="bartosz tobinski logo picture"
              width="60px"
            />
            <p className="nav-button active-nav name-and-surname ml-4 hidden rounded-lg p-1 lg:block">
              BARTOSZ TOBIŃSKI
            </p>
          </a>
        </button>
        <button aria-label="Go to experience section">
          <a
            href="#experience"
            className="nav-button projects-link hidden rounded-lg p-1 lg:block"
          >
            EXPERIENCE
          </a>
        </button>
        <button aria-label="Go to contact section">
          <a
            href="#contact"
            className="nav-button contacts-link hidden rounded-lg p-1 lg:block"
          >
            CONTACT
          </a>
        </button>
        <button aria-label="Download resume">
          <a
            href="https://drive.google.com/file/d/1vkrtW7mZNn4p3Q_jzyy75TIjZyXXq21z/view?usp=sharing"
            target="_blank"
            download
            className="nav-button contacts-link mr-4 hidden rounded-lg p-1 lg:block"
          >
            RESUME
          </a>
        </button>
      </div>
      <label
        ref={hamburgerRef}
        className="hamburger-btn h-3/4 w-full cursor-pointer rounded-lg lg:hidden"
      >
        <input
          aria-label="Open hamburger menu"
          className="hamburger-btn absolute m-0 h-0 w-0 cursor-pointer p-0"
          onChange={changeVisibility}
          type="checkbox"
        />
      </label>
      <AnimatePresence>
        {hamburgerIsActive && (
          <motion.div
            className="cursor-pointer"
            initial={{ y: "-4rem", opacity: 0 }}
            animate={{ y: "0rem", opacity: 1 }}
            exit={{ y: "-4rem", opacity: 0 }}
          >
            <ul className="hamburger-menu rounded-box absolute right-0 mt-64 flex w-48 flex-col items-center justify-center border-2 border-white bg-blue-darker p-4 text-center text-lg shadow lg:hidden">
              <li className="menu-item mb-2 flex h-full w-full rounded-lg bg-slate-600">
                <a
                  aria-label="Go to about section"
                  href="#home"
                  className="h-full w-full p-1 text-center"
                >
                  About
                </a>
              </li>
              <li className="menu-item mb-2 flex h-full w-full rounded-lg bg-slate-600">
                <a
                  aria-label="Go to experience section"
                  href="#experience"
                  className="h-full w-full p-1 text-center"
                >
                  Experience
                </a>
              </li>
              <li className="menu-item mb-2 flex h-full w-full rounded-lg bg-slate-600">
                <a
                  aria-label="Go to contact section"
                  href="#contact"
                  className="h-full w-full p-1 text-center"
                >
                  Contact
                </a>
              </li>
              <li className="menu-item flex h-full w-full rounded-lg bg-slate-600">
                <a
                  aria-label="Download resume"
                  href="https://drive.google.com/file/d/1vkrtW7mZNn4p3Q_jzyy75TIjZyXXq21z/view?usp=sharing"
                  target="_blank"
                  className="h-full w-full p-1 text-center"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
