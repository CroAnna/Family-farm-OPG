import React from "react";

const Proizvod = ({ name, price, about, image }) => {
  return (
    <div className="detaljnije">
      <h2>{name}</h2>
      <p>Cijena: {price}</p>
      <p>O proizvodu: {about}</p>
      <img src={image} alt="" className="detaljnije-image" />
    </div>
  );
};

export default Proizvod;
