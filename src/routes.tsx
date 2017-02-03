import * as React from 'react';
import { Router, Route } from 'react-router';

import App from './components/app';
import About from './components/about';
import NotFound from './components/not-found';

const Routes = (props: any) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
