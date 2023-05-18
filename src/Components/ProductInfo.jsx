import React from "react";
import { useParams } from "react-router-dom";
import { productList } from "../Data/products";
import ImageSlider from "./ImageSlider";

const ProductInfo = () => {
  let { id } = useParams();

  return (
    <div className="product-info">
      <div>
        {productList
          .filter((item) => item.id === id)
          .map((item, index) => (
            <div key={index} className="info">
              <h2>{item.name}</h2>
              <div className="info-content">
                <p>{item.about}</p>
              </div>
            </div>
          ))}
      </div>
      <ImageSlider itemName={id} />
    </div>
  );
};

export default ProductInfo;
