import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ username, onLogout }) => {
    return (
        <nav className="navbar">
            <h1 className="logo">My App</h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
                {username && (
                    <li>
                        <span className="username">{username}</span>
                        <button onClick={onLogout} className="logout-btn">Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
