import React from 'react';
//import Projects from "./Projects";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="banner-text">
            <h1 className="greeting-text">HELLO, I'M RIVA DAVIDOWSKI</h1>
            <p className="greeting-two-text">Front End Focused Engineer with Full Stack Experience</p>
            <button className="project-button">VIEW PROJECTS</button>
          </div>
        </header>
      <div className="navbar-container" id="mySidenav">
        <div id="resume" className="sidenav-item">
          <img src="/images/cv-icon.png" alt="resume" className="sidenav-image"/>
          <a href="https://github.com/RivaD2" className="header-logo">Resume</a>
        </div>
        <div id="linkedin" className="sidenav-item">
        <img src="/images/linkedin-logo.png" alt="linkedin" className="sidenav-image"/>
          <a href="https://www.linkedin.com/in/riva-davidowski-rivad/" className="header-logo">LinkedIn</a>
        </div>
        <div id="github" className="sidenav-item">
        <img src="/images/github-image2.png" alt="github" className="sidenav-image"/>
          <a href="https://github.com/RivaD2" className="header-logo">Github</a>
        </div>
        <div id="contact" className="sidenav-item">
        <img src="/images/email-icon.png" alt="contact" className="sidenav-image"/>
          <a href="https://github.com/RivaD2" className="header-logo">Contact</a>
        </div>
      </div>

   

















    </div>
      
  );
}

export default App;
