import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";

const Navigation = ({ openNav, setOpenNav }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <div className="desktop">
          <Navbar />
        </div>
      ) : (
        <div className="mobile">
          <Hamburger openNav={openNav} setOpenNav={setOpenNav} />
        </div>
      )}
    </div>
  );
};

export default Navigation;
