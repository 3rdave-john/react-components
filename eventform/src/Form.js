import React from "react";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import "./Form.css";
const style = {
  marginLeft: 20
};

const DividerExampleForm = () => (
  <div className="form">
    <div className="form__test">
      <Divider />
      <p className="form__p">REQUESTED BY</p>
      <Divider />
      <p className="form__p">DIVISION/AGENCY</p>
      <Divider />
      <p className="form__p">CHARITY/EVENT PROPERTY</p>
      <Divider />
      <p className="form__p">EVENT DATE(S)</p>
      <Divider />
      <p className="form__p">DESCRIPTION</p>
      <Divider />
      <p className="form__p"># OF EVENT ATTENDEES</p>
      <Divider />
      <p className="form__p">EVENT LOCATION</p>
      <Divider />
    </div>
    <Paper zDepth={2}>
      <TextField hintText="REQUESTED BY" style={style} underlineShow={false} />
      <Divider />
      <TextField
        hintText="DIVISION/AGENCY"
        style={style}
        underlineShow={false}
      />
      <Divider />
      <TextField
        hintText="CHARITY/EVENT PROPERTY"
        style={style}
        underlineShow={false}
      />
      <Divider />
      <TextField hintText="EVENT DATE(S)" style={style} underlineShow={false} />
      <Divider />
      <TextField hintText="DESCRIPTION" style={style} underlineShow={false} />
      <Divider />
      <TextField
        hintText="# OF EVENT ATTENDEES"
        style={style}
        underlineShow={false}
      />
      <Divider />
      <TextField
        hintText="EVENT LOCATION"
        style={style}
        underlineShow={false}
      />
      <Divider />
    </Paper>
  </div>
);

export default DividerExampleForm;
