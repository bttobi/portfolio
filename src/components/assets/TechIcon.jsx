import React from "react";
import { data } from "../data/tech";

const TechIcon = ({ name }) => {
  const technologies = data;
  const chosenTech = technologies.find((el) => el.name == name);

  return (
    (chosenTech != undefined || chosenTech != null) && (
      <li className="mt-4 flex flex-col items-center w-1/3">
        <img
          src={chosenTech.img_url}
          width={chosenTech.img_width}
          alt={chosenTech.name}
        />
        <span className="mt-2 text-center">{chosenTech.name}</span>
      </li>
    )
  );
};

export default TechIcon;
