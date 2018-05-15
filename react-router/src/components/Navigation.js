import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/menu">Menu</NavLink>
      <br />
      <NavLink to="/inventory">Inventory</NavLink>
    </div>
  );
};

export default Navigation;
