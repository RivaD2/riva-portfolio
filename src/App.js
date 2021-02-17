import React from 'react';
import Projects from "./Pages/ProjectsPage";
import HomePage from "./Pages/HomePage";
import HttpClient from "./HttpClient";
import NavBar from './Components/Navigation';
import About from './Pages/About';
import history from './history';
import {Route, Switch} from 'react-router-dom';
import {Router} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  state = {
      projectPageNasaImages: new Array(3),
      homepageBackgroundUrl: ''
    }
  
  //This method will be called after it is instantiated and will be called once
  componentDidMount() {
    const imageIdArray = ['GSFC_20171208_Archive_e001427', 'PIA12833', 'PIA23002','GSFC_20171208_Archive_e001500', 'GSFC_20171208_Archive_e000720'];
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

  render() {
    const {projectPageNasaImages, homepageBackgroundUrl} = this.state;

    return (
        <div className="App">
          <Router history={history}>
            <Switch>
              <Route exact path="/"> 
                <HomePage backgroundImage={homepageBackgroundUrl} /> 
              </Route>
              <Route exact path="/about" component={About} />
              <Route exact path="/projects">
                <Projects parallaxImgArray={projectPageNasaImages} />
              </Route>
            </Switch>
            <NavBar/>
          </Router>
        </div>
    );
  }
};

export default App;
