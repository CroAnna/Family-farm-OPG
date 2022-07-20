import React from "react";

const Proizvod = ({ name, price, about, image }) => {
  return (
    <div className="detaljnije">
      <h2>{name}</h2>
      <img src={image} alt={image} className="detaljnije-image" />
      <p>Cijena: {price}</p>
      <p>O proizvodu: {about}</p>
    </div>
  );
};

export default Proizvod;
