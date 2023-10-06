
// TopBar.js
import React from 'react';
import './style/TopBar.css';

import BatterySrc from '../assets/Icons/35Battery.png';

function TopBar() {
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
    const monthDay = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    const formattedDateTime = `${dayOfWeek}, ${monthDay}, ${time}`;

    return (
        <div className="top-bar">
            <div className="battery">
            <img src={BatterySrc} alt="Battery Icon" className="battery-icon" />  {/* Corrected the class name here */}
            <span>99%</span>
            </div>
            <div className="date-time">
                {formattedDateTime}
            </div>
        </div>
    );
}

export default TopBar;



