import './index.css';
import './components/Navbar'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='projects' element={<Projects/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
