import React from 'react';
import {Router} from 'react-router-dom'
import Projects from "./Pages/ProjectsPage";
// import About from './Pages/About';
import HomePage from "./Pages/HomePage";
import HttpClient from "./HttpClient";
import NavBar from './components/Navigation';
import history from './history';
import './App.css';

/* Todo: 
Remove ternary ops that are no longer needed after using Browser Router
Complete the about me page
Fix lag with api images/parallax scroll sticking
*/

class App extends React.Component {
  state = {
      displayedPage : 'HomePage',
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
        <div className="App">
          {displayedPage === 'Projects' ?
            (<Projects parallaxImgArray={projectPageNasaImages} />)
           :
            (<HomePage setPage={setPage}  backgroundImage={homepageBackgroundUrl} />)
          }
           <Router history={history}>
           <NavBar setPage={setPage}/>
           {/* <About setPage={setPage}/> */}
          </Router>
        </div>
    );
  }
};

export default App;
