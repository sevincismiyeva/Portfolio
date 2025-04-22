import React from "react";
import Card from "../card/Card";
import style from './Cards.module.css'

const Cards = () => {
  let cards = [
    {
      id: 1,
      title: "FREE",
      price: 0,
      plan: [
        "1 users",
        "5GB storage",
        "Unlimited public projects",
        "Community access",
        "Unlimited private projects",
        "Dedicated support",
        "Free linked domain",
        "Monthly status reports",
      ],
    },
    {
      id: 2,
      title: "PRO",
      price: 9,
      plan: [
        "5 users",
        "5GB storage",
        "Unlimited public projects",
        "Community access",
        "Unlimited private projects",
        "Dedicated support",
        "Free linked domain",
        "Monthly status reports",
      ],
    },
    {
      id: 3,
      title: "ENTERPRISE",
      price: 49,
      plan: [
        "Unlimited users",
        "5GB storage",
        "Unlimited public projects",
        "Community access",
        "Unlimited private projects",
        "Dedicated support",
        "Free linked domain",
        "Monthly status reports",
      ],
    },
  ];
  return (
    <div className={style.cards}>
      <h2 className={style.title}>Pay as you grow</h2>
      <p className={style.desc}>With our no hassle pricing plans</p>
      <div className={`${style.card} container`}>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            price={card.price}
            plan={card.plan}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
