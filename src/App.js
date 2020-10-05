import React from 'react';
import Projects from "./Pages/ProjectsPage";
import Home from "./Pages/HomePage";
import HttpClient from "./HttpClient";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    //creating state so that app can know some stuff
    this.state = {
      displayedPage : 'Projects',
      //setting backgroundImage to undefined until I fetch images
      projectPageNasaImages: new Array(3),
      homepageBackgroundUrl: ''
    }
  }
  //This method will be called after it is instantiated and will be called once
  componentDidMount() {

    // For each image, I need to make an async call
    const imageIdArray = ['GSFC_20171208_Archive_e001427', 'PIA12833', 'PIA23002','GSFC_20171208_Archive_e001500'];
    /*using parallel promises so thatwill return a new promise that will be resolved when all
      promises in array are resolved*/
    const promiseForImages = Promise.all(
      imageIdArray.map(image => {
        //This returns the image URL
        return HttpClient.getNasaImage(image);
      })
    )
    promiseForImages.then(imagesArray => {
       /* 
        - I need to save the URL to the app.js so I can fetch it once and remember it
        - React will rerender when props or state change
        - The Componenet wont't rerender if I just change a property on it
        - Instead, I store the homepageBackgroundURl/projectPageNasaImages IN THE STATE
      */
      this.setState({
        //I've saved URL in state and now It will be passed to homepage Component
         homepageBackgroundUrl: imagesArray[0],
        //getting all images from imagesArray except for first index (that is the homepage image);
        projectPageNasaImages: imagesArray.slice(1)
      })
    })
  }



  //the render function renders html for the component 
  render() {
    return (
      <div className="App">
        {/* curly braces mean we are using JS */}
        {/* using ternary operators for if else. The value of state will be checked
        and the Projects component or Home component will be rendered depending on value. */}
        {this.state.displayedPage === 'Projects' ?
          (<Projects parallaxImgArray={ this.state.projectPageNasaImages} />)
         :
          (<Home backgroundImage={this.state.homepageBackgroundUrl} />)
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
