import React from "react";
import "./Portfolio.css";

const Portfolio = ({ image, name, desc }) => {
  return (
    <div className="card">
      <div className="cardimg">
        <img src={image} alt="" />
        <div className="overlay"></div>
      </div>
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Portfolio;
