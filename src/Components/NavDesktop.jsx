import React from "react";
import { Link } from "react-router-dom";
import slika from "../Images/fruit.png";

const NavDesktop = () => {
  return (
    <div>
      <div className="navbar-container">
        <Link to="/">
          <img src={slika} alt="fruit" />
          <h1>OPG Škarica</h1>
        </Link>
        <nav>
          <ul>
            <Link to="/">
              <li className="gal">Početna</li>
            </Link>
            <Link to="/proizvodi">
              <li className="gal">Proizvodi</li>
            </Link>
            <Link to="/onama">
              <li className="gal">O nama</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavDesktop;
