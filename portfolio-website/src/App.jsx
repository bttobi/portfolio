import './index.css';
import './components/Navbar'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
