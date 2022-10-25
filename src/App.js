import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Reset from "./components/pages/Reset";
import Dashboard from "./components/pages/Dashboard";
import ProjectBackground from './components/pages/ProjectBackground';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/project-background" element={<ProjectBackground />}></Route>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
