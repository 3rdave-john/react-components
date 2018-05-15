import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./Header";
import Form from "./Form";
import DropDownMenu from "./DropDownMenu";

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
          <div className="App-body">
            <DropDownMenu />
            <DropDownMenu />
            <DropDownMenu />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
