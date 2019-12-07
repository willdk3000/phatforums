import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import Home from '../containers/Home';
import ViewThread from '../containers/ViewThread'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact path="/threads/:_id" component={ViewThread} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
