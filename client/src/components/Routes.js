import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import Home from '../containers/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
