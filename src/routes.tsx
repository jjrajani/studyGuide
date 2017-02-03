import * as React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import App from './components/app';
import About from './components/about';
import NotFound from './components/not-found';

const Routes = (props: any) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRedirect to="/about"/>
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
