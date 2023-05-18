import React from "react";
import Recipe from "./Product";
import { productList } from "../Data/products";

const AllProducts = () => {
  return (
    <div className="recipes">
      <h2 className="title">Istražite sve naše proizvode:</h2>
      <div className="recipes-container">
        {productList.map((recept, index) => (
          <Recipe
            name={recept.name}
            image={recept.image}
            key={recept.name}
            id={recept.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
