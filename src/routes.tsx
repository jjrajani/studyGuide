import * as React from "react";
import { Router, Route, IndexRedirect } from "react-router";

import App from "./components/app";
import Guide from "./components/guide";
import NewGuide from "./components/guide/new";
import Dashboard from "./components/dashboard";
import NotFound from "./components/not-found";

const Routes = (props: any) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRedirect to="/dashboard"/>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/guide" component={Guide} />
      <Route path="guide/new" component={NewGuide} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
