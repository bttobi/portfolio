import { AnimatePresence, motion } from 'framer-motion';
import React, {useState} from 'react';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const copyToClipboard = () => {
    setIsVisible(true);
    setTimeout(()=>{setIsVisible(false)},1000)
    navigator.clipboard.writeText(document.getElementById("email").textContent);
  }

  return (<>
      <section id="contact" style={{height: "auto", width: "100%"}} className="article flex flex-col items-center align-center">
        <div className="social-icons-wrapper w-full flex flex-col items-center" style={{height: "100vh"}}>
          <p className="text-2xl font-bold w-full text-center pt-24">Contact me: </p>
          <ul className="flex flex-col justify-center align-center items-center content-stretch gap-8 h-min w-auto">
            <li className="modal-action btn border-none font-bold rounded-lg text-white h-min p-0 shadow-md shadow-black flex justify-center w-full">
            <button className="flex lg:flex-row flex-col justify-center align-center items-center p-3 px-4 w-full h-full" aria-label="Copy email address" onClick={copyToClipboard}>
              <FiMail size={64}/>
              <span className="lg:ml-2 lg:mt-0 m-0 mt-4 text-lg" id="email">bartosz@tobinski.pl</span>
            </button>
            </li>
            <li className="flex justify-center align-center items-center modal-action p-0 btn border-none font-bold rounded-lg text-white h-min shadow-md shadow-black w-full">
              <button className="flex lg:flex-row flex-col justify-center align-center items-center w-full h-full" aria-label="Go to LinkedIn">
                <a className="flex lg:flex-row flex-col justify-center align-center items-center w-full h-full p-3" href="https://www.linkedin.com/in/bartosz-tobiński-525864246/" target="_blank">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg" width="64" alt="linkedin icon" />
                  <span className="lg:ml-2 lg:mt-0 m-0 mt-4 text-lg">LinkedIn</span>
                </a>
              </button>
            </li>
            <li className="flex justify-center align-center items-center modal-action p-0 btn border-none font-bold rounded-lg text-white h-min shadow-md shadow-black w-full">
              <button className="flex lg:flex-row flex-col justify-center align-center items-center w-full h-full" aria-label="Go to Github">
                <a className="flex lg:flex-row flex-col justify-center align-center items-center w-full h-full p-3" href="https://github.com/bttobi" target="_blank">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="64" alt="github icon" />
                  <span className="lg:ml-2 lg:mt-0 m-0 mt-4 text-lg">Github</span>
                </a>
              </button>
            </li>
          </ul>
        </div>
          <footer className="footer footer-center text-base-content rounded self-end my-4 w-full">Copyright © 2023 - All right reserved by Bartosz Tobiński</footer>
      </section>
      <AnimatePresence>
        {isVisible &&
        <motion.div className="w-full flex justify-center fixed bottom-32" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
          <div className="alert bg-blue-dark shadow-lg w-auto">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-white font-primary">Copied to clipboard!</span>
            </div>
          </div>
        </motion.div>}
      </AnimatePresence>  
    </>
  )
}

export default Contact