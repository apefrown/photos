import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";

import App from "./App";
import Photo from "./Photo";
import SinglePhoto from "./SinglePhoto";

const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/photos/:id" component={SinglePhoto} />
            <Route exact path="/photos" component={Photo} />
        </Switch>
    </Router>
);

export default Root;