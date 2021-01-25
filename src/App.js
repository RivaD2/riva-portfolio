import React from 'react';
import Projects from "./Pages/ProjectsPage";
import HomePage from "./Pages/HomePage";
import HttpClient from "./HttpClient";
import NavBar from './components/Navigation';
import About from './Pages/About';
import history from './history';
import {Route, Switch} from 'react-router-dom';
import {Router} from 'react-router-dom';
import './App.css';

/* Todo: 

Complete the about me page after image creation
Add button on ProjectsPage to jump user back to top
Fix Native app, drop in image of Terriarum page and add gif and demo desc to modal
Fix movie night and drop in image of Details page and add gif and demo desc to modal
Add Aqaba project when finished and drop in to projects and modal with demo desc
Double check modal for mobile after gifs and demo desc added
*/

class App extends React.Component {
  state = {
      projectPageNasaImages: new Array(3),
      homepageBackgroundUrl: ''
    }
  
  //This method will be called after it is instantiated and will be called once
  componentDidMount() {
    const imageIdArray = ['GSFC_20171208_Archive_e001427', 'PIA12833', 'PIA23002','GSFC_20171208_Archive_e001500', 'PIA15625'];
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
