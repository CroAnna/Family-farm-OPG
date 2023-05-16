import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  const navHandler = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="desktop">
        <Navbar />
      </div>

      <div className="mobile" onClick={navHandler}>
        <Hamburger openNav={isOpen} setOpenNav={setOpen} />
      </div>
    </>
  );
};

export default Navigation;
