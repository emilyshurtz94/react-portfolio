import React from 'react';
import Navbar from './components/Navbar';
import Project from './components/project';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Education from './components/Education';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/"  element={<AboutMe />} />
                <Route path="/project" element={<Project />} />
                <Route path="/education" element={<Education />} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App;