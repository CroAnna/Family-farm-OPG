import React from "react";
import Navbar from "./Navbar";
import slika from "../Images/kokice.jpg";

const Header = ({ openNav, setOpenNav }) => {
  return (
    <div className="header">
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <h1 id="top">OPG Škarica</h1>
      <h3>Samo najbolje neki tu tekst</h3>
      <div className="cover">
        <img src={slika} alt="" />
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
          bibendum dolor.
        </h2>
      </div>
    </div>
  );
};

export default Header;
