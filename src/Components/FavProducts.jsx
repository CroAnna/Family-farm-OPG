import React from "react";
import FavProduct from "./FavProduct";
import { productList } from "../Data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const FavProducts = () => {
  return (
    <div className="proizvodi-outer-container">
      <h3>Najpopularniji proizvodi</h3>
      <div className="proizvodi-container" id="proizvodi">
        {productList.map(
          (product, index) =>
            index < 3 && (
              <FavProduct
                name={product.name}
                price={product.price}
                about={product.about}
                image={product.image}
                key={product.name}
              />
            )
        )}
      </div>
      <div className="btn-gallery">
        <a href="../proizvodi">
          <button>
            Svi proizvodi <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
        </a>
      </div>
    </div>
  );
};
export default FavProducts;
