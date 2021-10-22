import React, {Suspense, lazy} from 'react';
import HomePage from "./Pages/HomePage";
import NavBar from './Components/Navigation';
import About from './Pages/About';
import history from './history';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import './App.css';

const Projects = lazy(() => import('./Pages/ProjectsPage'));
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/"> 
              <NavBar/>
              <HomePage /> 
              <Projects />
            </Route>
            <Route exact path="/about" component={About} />
          </Switch>
        </Suspense>
        </Router>
      </div>
    );
  }
};

export default App;
