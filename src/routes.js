import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';

const Routes = () => {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      </Switch>
    </div>
  )
}

export default Routes;