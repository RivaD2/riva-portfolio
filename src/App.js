import React from 'react';
import Projects from "./Pages/ProjectsPage";
import Home from "./Pages/HomePage";
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    //creating state so that app can know some stuff
    this.state = {
      displayedPage : 'Projects'
    }
  }
  //the render function renders html for the component 
  render() {
    return (
      <div className="App">
        {/* curly braces mean we are using JS */}
        {/* using ternary operators for if else. The value of state will be checked
        and the Projects component or Home component will be rendered depending on value. */}
        {this.state.displayedPage === 'Projects'?
          (<Projects/>)
         :
          (<Home/>)
        }
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
};

export default App;
