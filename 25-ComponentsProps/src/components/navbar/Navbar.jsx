import React from "react";
import Logo from "../logo/Logo";
import Navlist from "../navlist/Navlist";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar container">
      <Logo />
      <Navlist />
    </div>
  );
};

export default Navbar;
