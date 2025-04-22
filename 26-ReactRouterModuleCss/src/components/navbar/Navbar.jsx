import React from "react";
import Logo from "../logo/Logo";
import Navlist from "../navlist/Navlist";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={`${style.navbar} container`}>
        <Logo />
        <Navlist />
      </div>
    </>
  );
};

export default Navbar;
