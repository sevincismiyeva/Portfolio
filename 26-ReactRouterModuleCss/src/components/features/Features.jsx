import React from "react";
import Feature from "../feature/Feature";
import { MdWork } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { RiShareLine } from "react-icons/ri";
import style from "./Features.module.css";
import { MdArrowForward } from "react-icons/md";

const Features = () => {
  let features = [
    {
      id: 1,
      icon: <MdWork />,
      title: "Featured title",
      desc: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      call: <>
      Call to action <MdArrowForward />
      </>
    },
    {
      id: 2,
      icon: <FaBuilding />,
      title: "Featured title",
      desc: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      call: <>
      Call to action <MdArrowForward />
      </>
    },
    {
      id: 3,
      icon: <RiShareLine />,
      title: "Featured title",
      desc: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      call: <>
      Call to action <MdArrowForward />
      </>
    },
  ];

  return (
    <div className={`${style.features} container`}>
      {features.map((feature) => (
        <Feature
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          desc={feature.desc}
          call={feature.call}
        />
      ))}
    </div>
  );
};

export default Features;
