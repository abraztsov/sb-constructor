import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Results from '../pages/Results';

const Routes = () => (
  <Switch>
    <Route path="/results" component={Results} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
