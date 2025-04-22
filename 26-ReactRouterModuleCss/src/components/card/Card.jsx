import React from "react";
import { FaCheck } from "react-icons/fa";
import style from "./Card.module.css";
import { FaStar } from "react-icons/fa";

const Card = ({ title, price, plan }) => {
    
    
  return (
    <div className={style.card}>
      <h4 className={style.title}>{title=="PRO" && <FaStar className={style.star} />}{title}</h4>
      <h2 className={style.price}>
        ${price} <span>/ mo.</span>
      </h2>
      <ul className={style.plan}>
        {plan.map((item, id) => (
          <li key={id}>
            <FaCheck className={style.icon} /> {item}
          </li>
        ))}
      </ul>
      <button className={title=="PRO" ? style.btn : style.default}>Choose Plan</button>
    </div>
  );
};

export default Card;
