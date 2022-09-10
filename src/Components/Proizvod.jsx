import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Proizvod = ({ name, price, about, image }) => {
  useEffect(() => {
    Aos.init({ duration: 1500, offset: 0, anchorPlacement: "top" });
  }, []);
  return (
    <div className="detaljnije" data-aos="fade-up">
      <h2>{name}</h2>
      <img src={image} alt={image} className="detaljnije-image" />
      <p>
        Cijena: <b>{price}</b>
      </p>
      <p>O proizvodu: {about}</p>
    </div>
  );
};

export default Proizvod;
