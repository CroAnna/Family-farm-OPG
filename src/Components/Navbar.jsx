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
            <li>
              <a href="/">Početna</a>
            </li>
            <li>
              <a href="/proizvodi">Proizvodi</a>
            </li>
            <li>
              <a href="/#onama">O nama</a>
            </li>
            <li>
              <a href="/#naruci">Naruči odmah</a>
            </li>

            <Link to="/proizvodi">
              <li className="gal"></li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
