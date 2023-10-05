import React from 'react';
import NavBar from './NavBar';

import My_ComputerSrc from '../assets/Icons/35My_Computer.png';
import My_WebsitesSrc from '../assets/Icons/35My_Websites.png';
import Contact_MeSrc from '../assets/Icons/25Contact_Me.png';
import My_BlogSrc from '../assets/Icons/35My_notes.png'; 
import './style/Desktop.css';

function Desktop() {
  return (
    <div className="background"> {/* Applying the background class to a wrapping div */}
      <NavBar /> {/* New NavBar component */}

      {/* Existing Desktop components */}
      <div className="icon-container">
          <img src={My_ComputerSrc} alt="My Computer Icon" className="icon-image" />
          <span>My Computer</span>
      </div>
      <div className="icon-container">
          <img src={My_WebsitesSrc} alt="My Websites Icon" className="icon-image" />
          <span>My Websites</span>
      </div>
      <div className="icon-container">
          <img src={Contact_MeSrc} alt="Contact Me Folder" className="folder-image" />
          <span>Contact Me</span>
      </div>
      <div className="icon-container">
          <img src={My_BlogSrc} alt="My Notes Icon" className="icon-image" />
          <span>My Notes</span>
      </div>
    </div>
  );
}

export default Desktop;
