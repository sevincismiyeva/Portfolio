import React from "react";
import { Link } from "react-router-dom";
import style from"./Navlist.module.css";

const Navlist = () => {
  return (
    <ul className={style.list}>
      <li className={style.listitem}>
        <Link to={"/"}>Home</Link>
      </li>
      <li className={style.listitem}>
        <Link to={"/about"}>About</Link>
      </li>
      <li className={style.listitem}>
        <Link to={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
};

export default Navlist;
