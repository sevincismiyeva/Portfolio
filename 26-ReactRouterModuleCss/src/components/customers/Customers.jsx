import React from "react";
import style from "./Customers.module.css";
import Customer from "../customer/Customer";
import { FaQuoteRight } from "react-icons/fa6";


const Customers = () => {
  let customers = [
    {
      id: 1,
      icon: <FaQuoteRight />,
      descone: "Thank you for putting together such a great product. We loved  working with you and the whole team, and we will be recommending you to others!",
      desctwo: "- Client Name, Location",
    },
    {
        id: 2,
        icon: <FaQuoteRight />,
        descone: "The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!",
        desctwo: "- Client Name, Location",
      },
  ];
  return (
    <div className={style.customers}>
      <h2 className={style.title}>Customer testimonials</h2>
      <p className={style.desc}>Our customers love working with us</p>
      <div className={`${style.customer} container`}>
      {customers.map((customer)=>(
        <Customer
        key={customer.id}
        icon={customer.icon}
        descone={customer.descone}
        desctwo={customer.desctwo}
        />
        
      ))}
      </div>
    </div>
  );
};

export default Customers;
