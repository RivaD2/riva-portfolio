import React from 'react';
import {Router} from 'react-router-dom'
import Projects from "./Pages/ProjectsPage";
import HomePage from "./Pages/HomePage";
import HttpClient from "./HttpClient";
import NavBar from './components/Navigation';
import history from './history';
import './App.css';

/* Todo: 
Bring in Browser Router to handle internal navigation
Remove ternary ops that are no longer needed after using Browser Router
Complete the about me page
Fix lag with api images/parallax scroll sticking
Clean up styles, take a look and see what can be improved
Don't forget to add third project when it is completed*/

class App extends React.Component {
  state = {
      displayedPage : 'HomePage',
      //setting backgroundImage to undefined until I fetch images
      projectPageNasaImages: new Array(3),
      homepageBackgroundUrl: ''
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
    });
  };

  setPage = page => {
    this.setState({
      displayedPage: page
    })
  };
  
  render() {
    const {projectPageNasaImages, homepageBackgroundUrl, displayedPage} = this.state;
    const {setPage} = this;
    return (
      <Router history={history}>
        <div className="App">
          {displayedPage === 'Projects' ?
            (<Projects parallaxImgArray={projectPageNasaImages} />)
           :
            (<HomePage setPage={setPage}  backgroundImage={homepageBackgroundUrl} />)
          }
          <NavBar setPage={setPage}/>
        </div>
        </Router>
    );
  }
};

export default App;
