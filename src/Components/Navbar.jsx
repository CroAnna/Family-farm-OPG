import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ openNav, setOpenNav }) => {
  const navHandler = () => {
    setOpenNav(!openNav);
  };
  const closeHandler = () => {
    setOpenNav(false);
  };
  return (
    <div className="nav-bar">
      <div>
        <FontAwesomeIcon
          icon={faBars}
          onClick={navHandler}
          className={openNav ? "hidden" : "iconBar fixed"}
        />
        <FontAwesomeIcon
          icon={faX}
          onClick={navHandler}
          className={openNav ? "iconBar abs" : "hidden"}
        />
      </div>
      <div>
        <nav className={openNav ? "nav-bar" : "hidden"}>
          <ul>
            <li>
              <a href="#top" onClick={closeHandler}>
                Početna
              </a>
            </li>
            <li>
              <a href="./#proizvodi" onClick={closeHandler}>
                Proizvodi
              </a>
            </li>
            <li>
              <a href="#" onClick={closeHandler}>
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
