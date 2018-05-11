import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Avatar from "material-ui/Avatar";

class App extends Component {
  render() {
    const style = { margin: 5 };

    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <div className="App__avatars">
            <Avatar src={logo} size={150} style={style} />
            <Avatar src={logo} size={150} style={style} />
            <Avatar src={logo} size={150} style={style} />
            <Avatar src={logo} size={150} style={style} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
