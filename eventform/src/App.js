import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./Header";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <h1 className="App-header">
            SEA Product Marketing Device Loan Request Form
          </h1>
          <Form />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
