import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Hamburger = ({ isOpen, setOpen }) => {
  const navHandler = () => {
    setOpen(!isOpen);
  };
  const closeHandler = () => {
    setOpen(false);
  };
  return (
    <div className="nav-bar">
      <div>
        <FontAwesomeIcon
          icon={faBars}
          onClick={navHandler}
          className={isOpen ? "hidden" : "iconBar fixed"}
        />
        <FontAwesomeIcon
          icon={faX}
          onClick={navHandler}
          className={isOpen ? "iconBar abs" : "hidden"}
        />
      </div>
      <div>
        <nav className={isOpen ? "nav-bar" : "hidden"}>
          <ul>
            <li>
              <Link to="/" onClick={closeHandler}>
                Početna
              </Link>
            </li>
            <li>
              <Link to="/proizvodi" onClick={closeHandler}>
                Proizvodi
              </Link>
            </li>
            <li>
              <Link to="./#onama" onClick={closeHandler}>
                O nama
              </Link>
            </li>
            <li>
              <Link to="./#naruci" onClick={closeHandler}>
                Naruči odmah
              </Link>
            </li>
            <Link to="/proizvodi">
              <li className="gal" onClick={closeHandler}>
                Proizvodi
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Hamburger;
