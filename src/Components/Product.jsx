import React from "react";
import { Link } from "react-router-dom";

const Product = ({ name, image, id }) => {
  return (
    <div className="product">
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

export default Product;
