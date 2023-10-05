import React from 'react';
import './style/NavBar.css';
import OrangeIcon from '../assets/Icons/25Orange.png';

function NavBar() {
    return (
        <div className="navbar-container">
            <div className="navbar-item">Home</div>
            <div className="navbar-item work-button">Work</div>
            <img src={OrangeIcon} alt="Icon" className="navbar-icon" />
            <div className="navbar-item">Games</div>
            <div className="navbar-item contact-button">Contact</div>
        </div>
    );
}

export default NavBar;
