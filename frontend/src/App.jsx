import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import "./App.css"

function App(){
    const [user, setUser] = useState(null);

    return(
        <Router>
            <Navbar user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage setUser={setUser} />} />
            </Routes>
        </Router>
    );
}

export default App;
