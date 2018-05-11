import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";
import Inventory from "./Inventory";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Inventory />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
/* 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
*/
