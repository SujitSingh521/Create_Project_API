import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
    const [isMobile, setIsMobile] = useState(false);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <nav>
            <div className="logo">
                <Link to="/">MyWebsite</Link>
            </div>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
            <ul className={isMobile ? "nav-links nav-links-mobile" : "nav-links"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {!user && (
                    <>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                )}
                {user && (
                    <>
                        <li>{user.username}</li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
