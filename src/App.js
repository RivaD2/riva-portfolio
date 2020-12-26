import React from 'react';
import Projects from "./Pages/ProjectsPage";
import Home from "./Pages/HomePage";
import HttpClient from "./HttpClient";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedPage : 'HomePage',
      //setting backgroundImage to undefined until I fetch images
      projectPageNasaImages: new Array(3),
      homepageBackgroundUrl: ''
    }
  }
  //This method will be called after it is instantiated and will be called once
  componentDidMount() {
    const imageIdArray = ['GSFC_20171208_Archive_e001427', 'PIA12833', 'PIA23002','GSFC_20171208_Archive_e001500'];
    const promiseForImages = Promise.all(
      imageIdArray.map(image => {
        return HttpClient.getNasaImage(image);
      })
    )
    promiseForImages.then(imagesArray => {
      this.setState({
         homepageBackgroundUrl: imagesArray[0],
        projectPageNasaImages: imagesArray.slice(1)
      })
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.displayedPage === 'Projects' ?
          (<Projects parallaxImgArray={ this.state.projectPageNasaImages} />)
         :
          (<Home backgroundImage={this.state.homepageBackgroundUrl} />)
        }
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
        </div>
      </div>
        
    );
  }
};

export default App;
