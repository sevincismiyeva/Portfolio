import React from "react";
import style from "./Mainheader.module.css";

const Mainheader = () => {
  return (
    <div className={style.maintext}>
      <h1 className={style.title}> Present your business in a <br /> whole new way</h1>
      <p className={style.desc}>
        Quickly design and customize responsive mobile-first sites with <br />
        Bootstrap, the world’s most popular front-end open source toolkit!
      </p>
      <div className={style.button}>
        <button className={style.btn1}>Get Started</button>
        <button className={style.btn2}>Learn More</button>
      </div>
    </div>
  );
};

export default Mainheader;
