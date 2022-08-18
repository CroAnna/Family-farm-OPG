import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

// mozda dodaj tu image slider onaj

const Header = ({ openNav, setOpenNav }) => {
  return (
    <div className="header">
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <Link to="/">
        <h1>OPG Škarica</h1>
        <h3>Zdravo je, domaće je</h3>
      </Link>
    </div>
  );
};

export default Header;
