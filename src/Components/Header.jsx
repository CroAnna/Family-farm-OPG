import React from "react";
import Navbar from "./Navbar";
import slika from "../Images/povrce-usko.jpg";

// mozda dodaj tu image slider onaj

const Header = ({ openNav, setOpenNav }) => {
  return (
    <div className="header">
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <h1>OPG Škarica</h1>
      <h3>Zdravo je, domaće je</h3>
      <div className="cover">
        <img src={slika} alt={slika} />
        <h2>Želite li i Vi domaće proizvode, bez štetnih dodataka?</h2>
      </div>
    </div>
  );
};

export default Header;
