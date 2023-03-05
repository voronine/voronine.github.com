import React from 'react';
import './Footer.css';
import Nav from '../Nav/Nav';

function Footer({ isLoggedIn, handleLogout }) {

    return (
        <footer id="footer" className="footer">
            <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </footer>
    );
}

export default Footer;
