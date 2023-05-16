import React, { useState } from "react";
import Proizvod from "./Proizvod";
import { proizvodiList } from "../Data/proizvodi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { proizvodi } from "../Data/proizvodi";

const Proizvodi = () => {
  return (
    <div>
      <div className="proizvodi-container" id="proizvodi">
        {proizvodiList.map((proizvod, index) => (
          <Proizvod
            name={proizvod.name}
            price={proizvod.price}
            about={proizvod.about}
            image={proizvod.image}
            key={proizvod.name}
          />
        ))}
      </div>
      <div className="btn-gallery">
        <a href="../galerija">
          <button>
            Više fotografija <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
        </a>
      </div>
    </div>
  );
};
export default Proizvodi;
