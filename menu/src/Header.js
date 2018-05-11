import React, { PropTypes } from "react";
// import { Link } from "react-router";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import Menu from "material-ui/svg-icons/navigation/menu";
import ViewModule from "material-ui/svg-icons/action/view-module";
import { grey500 } from "material-ui/styles/colors";

class Header extends React.Component {
  render() {
    const { styles, handleChangeRequestNavDrawer } = this.props;

    const style = {
      appBar: {
        top: 0,
        backgroundColor: "grey"
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };

    return (
      <div>
        <AppBar
          style={{ ...styles, ...style.appBar }}
          iconElementLeft={
            <IconButton
              style={style.menuButton}
              onClick={handleChangeRequestNavDrawer}
            >
              <Menu color={grey500} />
            </IconButton>
          }
        />
      </div>
    );
  }
}

export default Header;
