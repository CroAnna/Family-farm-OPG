import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <Link to="/">
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
            <Link to="/#onama">
              <li className="gal">O nama</li>
            </Link>
            <Link to="/#naruci">
              <li className="gal">Naruči odmah</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
