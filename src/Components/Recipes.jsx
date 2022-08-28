import React from "react";
import Recipe from "./Recipe";

const Recipes = ({ recepti }) => {
  return (
    <div className="recipes">
      <h2 className="title">Recepti</h2>
      <div className="recipes-container">
        {recepti.map((recept, index) => (
          <Recipe name={recept.name} image={recept.image} key={recept.name} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
