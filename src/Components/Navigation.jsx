import React, { useState } from "react";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";
import NavDesktop from "./NavDesktop";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const navHandler = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="desktop">
        <NavDesktop />
      </div>

      <div className="mobile" onClick={navHandler}>
        <NavMobile isOpen={isOpen} setOpen={setOpen} />
        <Link to="/">
          <h1>OPG Škarica</h1>
          <h3>Zdravo je, domaće je</h3>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
