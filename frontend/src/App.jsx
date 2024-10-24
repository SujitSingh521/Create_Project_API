import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import SignUpPage from "./components/SignUpPage";
import './App.css'; // Main styles for the app

const App = () => {
    const [username, setUsername] = useState('');

    const handleLogin = (username) => {
        setUsername(username);
    };

    const handleLogout = () => {
        setUsername('');
    };

    return (
        <Router>
            <Navbar username={username} onLogout={handleLogout} />
            <div className="content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
