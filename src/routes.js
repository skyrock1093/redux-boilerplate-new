import React from 'react';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import { About, Home, Trends} from './components/Page';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="trends" component={Trends} />
    </Route>
    <Route path="*" name="not-found" component={NotFound} />
  </Router>
);
