import React from 'react';
import HomePage from "./Pages/HomePage";
import Projects from "./Pages/ProjectsPage";
import NavBar from './Components/Navigation';
import About from './Pages/About';
import history from './history';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/"> 
              <NavBar/>
              <HomePage /> 
              <Projects />
            </Route>
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
};

export default App;
