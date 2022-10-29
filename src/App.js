import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
//import Login from "./components/pages/Login";
import Project from "./components/pages/Project";
//import Reset from "./components/pages/Reset";
import Dashboard from "./components/pages/Dashboard";
import ProjectBackground from './components/pages/ProjectBackground';
//import Register from "./components/pages/Register";
import Research from "./components/pages/Research";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/project-background" element={<ProjectBackground />}></Route>
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/research-links" element={<Research />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

/* removed:

        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        */