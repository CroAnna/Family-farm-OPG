import React from "react";

import lavanda1 from "../Images/lavanda1.jpg";
import lavanda2 from "../Images/lavanda2.jpg";
import lavanda3 from "../Images/lavanda3.jpg";
import lavanda4 from "../Images/lavanda4.jpg";
import lavanda5 from "../Images/lavanda5.jpg";
import lavanda6 from "../Images/lavanda6.jpg";
import lavanda7 from "../Images/lavanda7.jpg";
import lavanda8 from "../Images/lavanda8.jpg";
import lavanda9 from "../Images/lavanda9.jpg";
import lavanda10 from "../Images/lavanda10.jpg";
import butternut1 from "../Images/butternut1.jpg";

const Gallery = () => {
  return (
    <div className="galerija-container">
      <div className="grupa">
        <h2>Lavanda</h2>
        <div className="slike">
          <img src={lavanda1} alt="" />
          <img src={lavanda2} alt="" /> <img src={lavanda3} alt="" />
          <img src={lavanda4} alt="" />
          <img src={lavanda5} alt="" /> <img src={lavanda6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
