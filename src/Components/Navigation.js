import React from 'react';
import './Navigation.css';

const Navigation  = props => {
    return (
      <div className="navbar-container" id="mySidenav">
        <div id="resume" className="sidenav-item">
          <img src="/images/cv-icon.png" alt="resume" className="sidenav-image"/>
          <a href="https://docs.google.com/document/d/1mjVhHz7QWpni4FIcUyMg8wtVrNVlW3scv7IxtfEiHVw/edit?usp=sharing" className="header-logo">Resume</a>
        </div>
        <div id="linkedin" className="sidenav-item">
          <img src="/images/linkedin-logo.png" alt="linkedin" className="sidenav-image"/>
          <a href="https://www.linkedin.com/in/riva-davidowski-rivad/" className="header-logo">LinkedIn</a>
        </div>
        <div id="github" className="sidenav-item">
          <img src="/images/github-image2.png" alt="github" className="sidenav-image"/>
          <a href="https://github.com/RivaD2" className="header-logo">Github</a>
         </div>
        <div id="home" className="sidenav-item">
            <div className="sidenav-image sidenav-icon">
              <i className={'home icon'}></i>
            </div>
          <a className="header-logo" onClick={() => props.setPage('Homepage')}>Home</a>
        </div>
      </div>
    )
}

export default Navigation;
