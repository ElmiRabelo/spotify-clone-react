import React from "react";

import { Switch, Route } from "react-router-dom";

import Browse from "../pages/browse/browse.page";
import Playlist from "../pages/playlist/playlist.page";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/playlist/:id" component={Playlist} />
  </Switch>
);

export default Routes;
