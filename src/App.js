import React from 'react';
import Projects from "./Pages/ProjectsPage";
import HomePage from "./Pages/HomePage";
import NavBar from './Components/Navigation';
import About from './Pages/About';
import history from './history';
import {Route, Switch} from 'react-router-dom';
import {Router} from 'react-router-dom';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/"> 
              <HomePage /> 
            </Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/projects">
              <Projects />
            </Route>
          </Switch>
          <NavBar/>
        </Router>
      </div>
    );
  }
};

export default App;
