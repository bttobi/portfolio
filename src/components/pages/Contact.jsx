import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const copyToClipboard = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    navigator.clipboard.writeText(document.getElementById("email").textContent);
  };

  return (
    <>
      <section
        id="contact"
        style={{ minHeight: "100vh", width: "100%" }}
        className="article align-center flex flex-col items-center"
      >
        <div
          className="social-icons-wrapper flex w-full flex-col content-center items-center justify-center"
          style={{ minHeight: "90vh" }}
        >
          <p className="w-full pt-24 text-center font-article text-2xl font-bold">
            Contact me via:
          </p>
          <ul className="align-center content-stretch mx-8 mt-8 flex h-min w-min flex-col items-center justify-center gap-8 px-0 lg:w-full lg:flex-row lg:px-16">
            <li className="menu-item flex h-min w-full flex-grow basis-0 justify-center rounded-lg border-none p-0 font-bold text-white shadow-md shadow-black lg:w-0">
              <button
                className="align-center flex h-full w-full items-center justify-center p-3 px-4"
                aria-label="Copy email address"
                onClick={copyToClipboard}
              >
                <FiMail size={48} />
                <span className="ml-4 text-lg" id="email">
                  bartosz@tobinski.pl
                </span>
              </button>
            </li>
            <li className="menu-item align-center flex h-min w-full flex-grow basis-0 items-center justify-center rounded-lg border-none p-0 font-bold text-white shadow-md shadow-black lg:w-0">
              <button
                className="align-center flex h-full w-full items-center justify-center"
                aria-label="Go to LinkedIn"
              >
                <a
                  className="align-center flex h-full w-full items-center justify-center p-3 px-4"
                  href="https://www.linkedin.com/in/bartosz-tobiński-525864246/"
                  target="_blank"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg"
                    width="48"
                    alt="linkedin icon"
                  />
                  <span className="ml-4 text-lg">LinkedIn</span>
                </a>
              </button>
            </li>
            <li className="menu-item align-center flex h-min w-full flex-grow basis-0 items-center justify-center rounded-lg border-none p-0 font-bold text-white shadow-md shadow-black lg:w-0">
              <button
                className="align-center flex h-full w-full items-center justify-center"
                aria-label="Go to Github"
              >
                <a
                  className="align-center flex h-full w-full items-center justify-center p-3 px-4"
                  href="https://github.com/bttobi"
                  target="_blank"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    width="48"
                    alt="github icon"
                  />
                  <span className="ml-4 text-lg">Github</span>
                </a>
              </button>
            </li>
          </ul>
        </div>
        <footer className="footer footer-center my-4 h-min w-full self-end rounded text-base-content">
          Copyright © 2024 - All right reserved by Bartosz Tobiński
        </footer>
      </section>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-32 z-30 flex w-full justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="alert w-auto bg-blue-dark shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0 stroke-current text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-primary text-white">
                  Copied to clipboard!
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
