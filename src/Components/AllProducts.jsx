import React from "react";
import Product from "./Product";
import { productList } from "../Data/products";

const AllProducts = () => {
  return (
    <div className="products">
      <h2 className="title">Istražite sve naše proizvode:</h2>
      <div className="products-container">
        {productList.map((item, index) => (
          <Product
            name={item.name}
            image={item.image}
            key={item.name}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
