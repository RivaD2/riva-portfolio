import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

const Navigation  = props => {
    return (
      <div className="navbar-container" id="mySidenav">
        <div id="resume" className="sidenav-item">
          <img 
            src="/images/cv-icon.png" 
            alt="resume" 
            className="sidenav-image"
          />
         <Link
            to={{pathname:"https://docs.google.com/document/d/1mjVhHz7QWpni4FIcUyMg8wtVrNVlW3scv7IxtfEiHVw/edit?usp=sharing"}} 
            className="header-logo"
            target="#">
              Resume
          </Link> 
        </div>
        <div id="linkedin" className="sidenav-item">
          <img 
            src="/images/linkedin-logo.png" 
            alt="linkedin" 
            className="sidenav-image"
          />
          <Link 
            to={{pathname:"https://www.linkedin.com/in/riva-davidowski-rivad/"}}
            className="header-logo"
            target="#">
              LinkedIn
          </Link>
        </div>
        <div id="github" className="sidenav-item">
            <img 
              src="/images/github-image2.png" 
              alt="github" 
              className="sidenav-image"
            />
            <Link 
              to={{pathname:"https://github.com/RivaD2"}} 
              className="header-logo"
              target="#">
                Github
            </Link>
         </div>
        <div id="home" className="sidenav-item">
            <div className="sidenav-image sidenav-icon">
              <i className={'home icon'}></i>
            </div>
          <Link 
            to="/" 
            className="header-logo">
              Home
          </Link>
        </div>
        <div id="about-me" className="sidenav-item">
          <div className="sidenav-image sidenav-icon">
            <i className={'address book icon'}></i>
          </div>
            <Link 
              to="/about" 
              className="header-logo">
                  About
            </Link>
        </div>
        </div>
    )
}

export default Navigation;
