import React from "react";
import { useParams } from "react-router-dom";
import { proizvodiList } from "../Data/proizvodi";
import Gallery from "./ImageSlider";

const RecipeInfo = () => {
  let { id } = useParams();

  return (
    <div className="recipe-info">
      <div>
        {proizvodiList
          .filter((recept) => recept.id === id)
          .map((recept, index) => (
            <div key={index} className="info">
              <h2>{recept.name}</h2>
              <div className="info-content">
                <p>{recept.about}</p>
              </div>
            </div>
          ))}
      </div>
      <Gallery itemName={id} />
    </div>
  );
};

export default RecipeInfo;
