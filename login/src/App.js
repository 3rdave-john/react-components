import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Card>
            <CardTitle title="Login Page" />
            <CardText>Welcome To The VR Portal</CardText>
            <CardActions>
              <FlatButton label="Login" />
              <FlatButton label="Ask for Authorization" />
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
