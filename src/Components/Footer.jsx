import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p>Imate pitanja?</p>

      <a href="mailto:opgskarica@gmail.com">
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>&nbsp;&nbsp;opgskarica@gmail.com</span>
        </p>
      </a>

      <a href="https://www.instagram.com/">
        <p>
          <FontAwesomeIcon icon={faInstagram} />
          <span>&nbsp;&nbsp;@opgskarica</span>
        </p>
      </a>
    </div>
  );
};

export default Footer;
