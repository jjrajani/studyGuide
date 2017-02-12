import * as React from "react";
import { Router, Route, IndexRedirect, hashHistory } from "react-router";

import App from "./components/app";

import Login from "./components/login";

import Guide from "./components/guide";
import GuideList from "./components/guide/list";
import GuideDetail from "./components/guide/detail";
import GuideForm from "./components/guide/form";

import Resource from "./components/resource";
import ResourceForm from "./components/resource/form";

import ChapterForm from "./components/chapter/form";

import SectionForm from "./components/section/form";

import NoteForm from "./components/note/form";

import Dashboard from "./components/dashboard";
import NotFound from "./components/not-found";

const Routes = (props: any) => (
  <Router {...props} history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="guides"/>

      <Route path="login" component={Login}/>

      <Route path="dashboard" component={Dashboard} />

      <Route path="guide" component={Guide} />
      <Route path="guides" component={GuideList} />
      <Route path="guide/new/:id" component={GuideForm} />
      <Route path="guide/edit/:id" component={GuideForm} />

      <Route path="guide/:id" component={GuideDetail} />
      <Route path="guide/:id/resource" component={Resource}/>
      <Route path="guide/:id/resource/add" component={ResourceForm}/>

      <Route path="guide/:id/resource/chapter/add" component={ChapterForm}/>
      <Route path="guide/:id/resource/chapter/:chapterId/edit" component={ChapterForm}/>

      <Route path="guide/:id/resource/chapter/:chapterId/section/add" component={SectionForm}/>
      <Route path="guide/:id/resource/chapter/:chapterId/section/edit" component={SectionForm}/>

      <Route path="guide/:id/resource/chapter/:chapterId/section/:sectionId/note/add" component={NoteForm}/>
      <Route path="guide/:id/resource/chapter/:chapterId/section/:sectionId/note/edit" component={NoteForm}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
