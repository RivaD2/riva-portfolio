import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation  = () => {
    return (
      <div className="navbar-container" id="mySidenav">
        <Link
        to={require("../RivaDavidowski_Resume.pdf")} 
        target="blank"
        id="resume" 
        className="sidenav-item"
          
        >
          <img 
            src="/images/cv-icon.png" 
            alt="resume" 
            className="sidenav-image"
          />
          <div className="header-logo">
            Resume
          </div>
        </Link> 
        <Link 
          to={{pathname:"https://www.linkedin.com/in/riva-davidowski-rivad/"}}
          target="#" 
          id="linkedin"
          className="sidenav-item"
        >
          <img 
            src="/images/linkedin-logo.png" 
            alt="linkedin" 
            className="sidenav-image"
          />
          <div className="header-logo">
            LinkedIn
          </div>
        </Link>
        <Link 
          to={{pathname:"https://github.com/RivaD2"}} 
          target="#" 
          id="github" 
          className="sidenav-item"
        >
          <img 
            src="/images/github-image2.png" 
            alt="github" 
            className="sidenav-image"
          />
          <div className="header-logo">
            Github
          </div>
        </Link>
        <Link 
          to="/" 
          id="home" 
          className="sidenav-item"
        >
          <div className="sidenav-image sidenav-icon">
            <i className={'home icon'}></i>
          </div>
          <div className="header-logo">
            Home
          </div>
        </Link>
        <Link 
          to="/about" 
          id="about-me" 
          className="sidenav-item"
        >
          <div className="sidenav-image sidenav-icon">
            <i className={'address book icon'}></i>
          </div>
          <div className="header-logo">
            About
          </div>
        </Link>
      </div>
    )
}

export default Navigation;
