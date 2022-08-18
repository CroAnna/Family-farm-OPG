import React from "react";
import slika from "../Images/povrce-usko.jpg";

function Coverphoto() {
  return (
    <div>
      <div className="cover">
        <img src={slika} alt={slika} />
        <h2>Želite li i Vi domaće proizvode, bez štetnih dodataka?</h2>
      </div>
    </div>
  );
}

export default Coverphoto;
