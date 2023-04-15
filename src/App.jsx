import './index.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import {motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import isInView from './components/functions/isInView';

function App() {

  useEffect(()=>{
    document.addEventListener("scroll", isInView); //adding scrolling event
  },)

  return (
    <AnimatePresence>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} id="App" className="flex flex-col">
        <Navbar />
        <Home />
        <Projects />
        <Contact />
      </motion.div>
    </AnimatePresence>
  )
}

export default App
