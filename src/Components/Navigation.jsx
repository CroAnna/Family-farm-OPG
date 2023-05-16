import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const navHandler = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <div className="desktop">
        <Navbar />
      </div>

      <div className="mobile" onClick={navHandler}>
        <Hamburger openNav={isOpen} setOpenNav={setOpen} />{" "}
        <Link to="/">
          <h1>OPG Škarica</h1>
          <h3>Zdravo je, domaće je</h3>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
