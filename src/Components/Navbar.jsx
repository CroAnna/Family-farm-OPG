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
              <a href="./#onama">O nama</a>
            </li>
            <li>
              <a href="./#naruci">Naruči odmah</a>
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
