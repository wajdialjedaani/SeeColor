import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Project from "./components/pages/Project";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Project />}></Route>
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