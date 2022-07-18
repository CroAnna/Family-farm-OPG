import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import slika from "../Images/kokice.jpg";

const Header = ({ openNav, setOpenNav }) => {
  const navHandler = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="header">
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
              <li>Početna</li>
              <li>O nama</li>
              <li>Kontakt</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="cover">
        <h1>OPG Škarica</h1>
        <h3>Samo najbolje neki tu tekst</h3>
        {/* <img src={slika} alt="" /> */}
      </div>
    </div>
  );
};

export default Header;
