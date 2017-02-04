import * as React from "react";
import { Router, Route, IndexRedirect } from "react-router";

import App from "./components/app";
import Guide from "./components/guide";
import GuideDetail from "./components/guide/detail";
import GuideForm from "./components/guide/form";
import Resource from "./components/resource";
import ResourceForm from "./components/resource/form";
import Dashboard from "./components/dashboard";
import NotFound from "./components/not-found";

const Routes = (props: any) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRedirect to="/dashboard"/>
      <Route path="/dashboard" component={Dashboard} />

      <Route path="/guide" component={Guide} />
      <Route path="guide/new/:id" component={GuideForm} />
      <Route path="guide/edit/:id" component={GuideForm} />

      <Route path="/guide/:id" component={GuideDetail} />
      <Route path="guide/:id/resource" component={Resource}/>
      <Route path="guide/:id/resource/add" component={ResourceForm}/>

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
