import React from "react";
import Proizvod from "./FavProduct";
import { proizvodiList } from "../Data/proizvodi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Proizvodi = () => {
  return (
    <div className="proizvodi-outer-container">
      <h3>Najpopularniji proizvodi</h3>
      <div className="proizvodi-container" id="proizvodi">
        {proizvodiList.map(
          (proizvod, index) =>
            index < 3 && (
              <Proizvod
                name={proizvod.name}
                price={proizvod.price}
                about={proizvod.about}
                image={proizvod.image}
                key={proizvod.name}
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
export default Proizvodi;
