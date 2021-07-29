import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }