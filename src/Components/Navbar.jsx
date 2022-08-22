import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="./#proizvodi">Proizvodi</a>
            </li>
            <li>
              <a href="./#lokacija">Lokacija</a>
            </li>
            <li>
              <a href="./#kontakt">Kontakt</a>
            </li>
            <Link to="/galerija">
              <li className="gal">Galerija</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
