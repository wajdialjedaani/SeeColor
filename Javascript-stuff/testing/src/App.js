import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import RegisterLogin from './components/pages/RegisterLogin';
import ProjectBackground from './components/pages/ProjectBackground';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register-or-login" element={<RegisterLogin />}></Route>
        <Route path="/project-background" element={<ProjectBackground />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
