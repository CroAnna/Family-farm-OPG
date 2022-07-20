import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p>Imate pitanja?</p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        <span>&nbsp;&nbsp;opgskarica@gmail.com</span>
      </p>
      <p>
        <FontAwesomeIcon icon={faInstagram} />
        <span>&nbsp;&nbsp;@opgskarica</span>
      </p>
    </div>
  );
};

export default Footer;
