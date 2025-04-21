import React from "react";
import "./Portfolios.css";
import Portfolio from "../portfolio/Portfolio";

const Portfolios = () => {
  let portfolios = [
    {
      id: 1,
      image:
        "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg",
      name: "Threads",
      desc: "Illustration",
    },
    {
      id: 2,
      image:
        "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg",
      name: "Explore",
      desc: "Graphic Design",
    },
    {
      id: 3,
      image:
        "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg",
      name: "Finish",
      desc: "Identity",
    },
    {
      id: 4,
      image:
        "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg",
      name: "Lines",
      desc: "Branding",
    },
    {
      id: 5,
      image:
        "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg",
      name: "ThreadsSouthwest",
      desc: "Website Design",
    },
    {
      id: 6,
      image:
        "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg",
      name: "Window",
      desc: "Photography",
    },
  ];
  return (
    <div className="portfolios">
      <h1 className="title">Portfolio</h1>
      <p className="desc">Lorem ipsum dolor sit amet consectetur.</p>

      <div className="list container">
        {portfolios.map((portfolio) => (
          <Portfolio
            key={portfolio.id}
            image={portfolio.image}
            name={portfolio.name}
            desc={portfolio.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
