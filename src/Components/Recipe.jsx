import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ name, image, id }) => {
  return (
    <div className="recipe">
      <Link to={"/proizvodi/" + id}>
        <div className="image-container ">
          <span className="darken">
            <img src={image} alt="" />
          </span>
          <div className="overlay">
            <span>{name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Recipe;
