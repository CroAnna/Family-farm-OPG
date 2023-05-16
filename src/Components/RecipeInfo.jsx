import React from "react";
import { useParams } from "react-router-dom";
import { receptiList } from "../Data/recepti";

const RecipeInfo = () => {
  let { name } = useParams();

  return (
    <div className="recipe-info">
      <div>
        {receptiList
          .filter((recept) => recept.name === name)
          .map((recept, index) => (
            <div key={index} className="info">
              <h2>{name}</h2>
              <div className="info-photo">
                <img src={recept.image} alt={name} />
              </div>
              <div className="info-content">
                <h3>Sastojci:</h3>
                <h4>{recept.ingredients}</h4>
                <h3>Upute za pripremu:</h3>
                <h4>{recept.description}</h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeInfo;
