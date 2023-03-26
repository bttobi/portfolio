import './index.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Home/>
        <Projects/>
        <Contact/>
      </div>
  )
}

export default App
