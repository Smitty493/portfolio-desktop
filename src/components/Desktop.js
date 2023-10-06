import React from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar';

import My_ComputerSrc from '../assets/Icons/35My_Computer.png';
import About_MeSrc from '../assets/Icons/25About_Me.png';
import BlogSrc from '../assets/Icons/35Blog.png';
import Dev_LogsSrc from '../assets/Icons/35Dev_Logs.png'; 
import TrashSrc from '../assets/Icons/35trash.png'; 
import './style/Desktop.css';

function Desktop() {
  return (
    <div className="background">
      <TopBar /> 
      <NavBar /> 

      {/* Wrap icons in a container */}
      <div className="icons-wrapper">
        <div className="icon-container">
            <img src={My_ComputerSrc} alt="My Computer Icon" className="icon-image" />
            <span>My Computer</span>
        </div>
        <div className="icon-container">
            <img src={About_MeSrc} alt="About Me Folder" className="folder-image" />
            <span>About Me</span>
        </div>
        <div className="icon-container">
            <img src={BlogSrc} alt="Blog Icon" className="icon-image" />
            <span>Blog</span>
        </div>
        <div className="icon-container">
            <img src={Dev_LogsSrc} alt="Dev logs Icon" className="icon-image" />
            <span>Dev Logs</span>
        </div>
        <div className="icon-container">
            <img src={TrashSrc} alt="Trash Icon" className="icon-image" />
            <span>Recycle Bin</span>
        </div>
      </div>
    </div>
  );
}

export default Desktop;
