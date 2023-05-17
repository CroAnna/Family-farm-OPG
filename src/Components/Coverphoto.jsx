import React from "react";
import slika from "../Images/povrce-usko.jpg";

function Coverphoto() {
  return (
    <div>
      <div className="cover">
        <div className="cover-img">
          <img src={slika} alt={slika} />
        </div>
        <div className="cover-overlay">
          <div className="cover-text">
            <h2>Zdravo, a ukusno?</h2>
            <h4>
              Vjerujemo u održivu poljoprivredu i prakticiramo organske metode
              uzgoja kako bismo osigurali zdravu i ekološki prihvatljivu hranu
              za naše kupce.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coverphoto;
