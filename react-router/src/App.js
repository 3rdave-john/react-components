import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/menu" component={Menu} />
            <Route path="/inventory" component={Inventory} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
