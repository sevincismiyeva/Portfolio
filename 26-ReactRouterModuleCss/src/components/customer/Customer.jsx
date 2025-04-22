import React from "react";
import style from "./Customer.module.css";

const Customer = ({ icon, descone, desctwo }) => {
  return (
    <div className={style.card}>
      <div className={style.icon}>{icon}</div>
      <div>
        <p className={style.descone}>{descone}</p>
        <p className={style.desctwo}>{desctwo}</p>
      </div>
    </div>
  );
};

export default Customer;
