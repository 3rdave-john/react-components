import React, { Component } from "react";
// import cn from "classnames";
// import "react-big-calendar/lib/less/styles.less";
// import "./styles.less";
// import "./prism.less";
//Demos
// import Basic from "./demos/basic";
// import Selectable from "./demos/selectable";
// import Cultures from "./demos/cultures";
// import Popup from "./demos/popup";
// import Rendering from "./demos/rendering";
// import CustomView from "./demos/customView";
// import Resource from "./demos/resource";
// import Timeslots from "./demos/timeslots";
// import Dnd from "./demos/dnd";
import "./App.css";

// import localizer from "react-big-calendar/lib/localizers/globalize";
// import globalize from "globalize";

// localizer(globalize);

// import BigCalendar from 'react-big-calendar'
// import moment from 'moment'
// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from "./events";
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class App extends Component {
  state = { selected: "basic" };
  render() {
    // let selected = this.state.selected;
    // let Current = {
    //   basic: Basic,
    //   selectable: Selectable,
    //   cultures: Cultures,
    //   popup: Popup,
    //   rendering: Rendering,
    //   customView: CustomView,
    //   resource: Resource,
    //   timeslots: Timeslots,
    //   dnd: Dnd
    // }[selected];
    return (
      // <div className="app">
      //   <div className="examples">
      //     <div className="example">
      //       <div className="view-source" />
      //       <Basic />
      //     </div>
      //   </div>
      // </div>
      <div>
        <BigCalendar
          events={events}
          views={allViews}
          step={60}
          showMultiDayTimes
          defaultDate={new Date(2015, 3, 1)}
        />
      </div>
    );
  }
  // select = (selected, e) => {
  //   e.preventDefault();
  //   this.setState({ selected });
  // };
}

export default App;
