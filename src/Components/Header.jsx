import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <Link to="/">
        <h1>OPG Škarica</h1>
        <h3>Zdravo je, domaće je</h3>
      </Link>
    </div>
  );
};

export default Header;
