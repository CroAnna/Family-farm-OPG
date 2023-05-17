import React from "react";
import Recipe from "./Recipe";
import { proizvodiList } from "../Data/proizvodi";

const Recipes = () => {
  return (
    <div className="recipes">
      <h2 className="title">Istražite sve naše proizvode:</h2>
      <div className="recipes-container">
        {proizvodiList.map((recept, index) => (
          <Recipe name={recept.name} image={recept.image} key={recept.name} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
