import "./App.css";
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Skill from "./pages/Skill";
import Contact from "./pages/contact";



function App() {
  const[active,setActive] = useState(false);

  const handleClick =()=>{
    setActive(!active);
  }
  console.log(active);

  return (
    <div className="App">
      <Router>
        <Navbar active = {active} handleClick={handleClick} />
        
        <Routes>
          <Route path="/" element={<Home  active = {active} />}  />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skill" element={<Skill/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
