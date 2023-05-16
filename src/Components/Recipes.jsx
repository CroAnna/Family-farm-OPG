import React from "react";
import Recipe from "./Recipe";
import { receptiList } from "../Data/recepti";

const Recipes = () => {
  return (
    <div className="recipes">
      <h2 className="title">Recepti</h2>
      <div className="recipes-container">
        {receptiList.map((recept, index) => (
          <Recipe name={recept.name} image={recept.image} key={recept.name} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
