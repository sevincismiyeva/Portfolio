import React from "react";
import Service from "../service/Service";
import { FaShoppingCart } from "react-icons/fa";
import { PiMonitor } from "react-icons/pi";
import { PiLockKey } from "react-icons/pi";
import './Services.css'



const Services = () => {
  let services = [
    {
      id: 1,
      name: "E-Commerce",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      icon: <FaShoppingCart />,
    },
    {
      id: 2,
      name: "Responsive Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      icon: <PiMonitor />,
    },
    {
      id: 3,
      name: "Web Security",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      icon: <PiLockKey />,
    },
  ];

  return (
    <div className="services">
    <h2 className="title">SERVICES</h2>
    <p className="desc">Lorem ipsum dolor sit amet consectetur.</p>
    <div className="service-list container">
      {services.map((service) => (
        <Service
          key={service.id}
          icon={service.icon}
          name={service.name}
          desc={service.description}
        />
      ))}
    </div>
  </div>
  );
};

export default Services;
