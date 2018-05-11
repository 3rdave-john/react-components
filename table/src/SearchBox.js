import React from "react";
import TextField from "material-ui/TextField";
import { white, blue500 } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import Search from "material-ui/svg-icons/action/search";

const SearchBox = () => {
  const styles = {
    iconButton: {
      paddingTop: 17
    },
    textField: {
      color: "black",
      backgroundColor: "white",
      borderRadius: 2,
      height: 35
    },
    inputStyle: {
      color: "black",
      paddingLeft: 5
    },
    hintStyle: {
      height: 16,
      paddingLeft: 5,
      color: "black"
    }
  };

  return (
    <div>
      <IconButton style={styles.iconButton}>
        <Search color={white} />
      </IconButton>
      <TextField
        hintText="Search For Inventory"
        underlineShow={false}
        fullWidth={true}
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.hintStyle}
      />
    </div>
  );
};

export default SearchBox;
