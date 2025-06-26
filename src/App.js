import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function PortfolioPage(){
  console.log("PortfolioPage is rendering");
  return(
    <div className="App">
      <h1>This is working!</h1>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;