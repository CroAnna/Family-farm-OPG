import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <a href="#naruci">Imate pitanja?</a>
      </p>

      <a href="https://www.instagram.com/opgskarica/">
        <p>
          <FontAwesomeIcon icon={faInstagram} />
          <span>&nbsp;&nbsp;@opgskarica</span>
        </p>
      </a>

      <a href="https://www.facebook.com/opgskarica/">
        <p>
          <FontAwesomeIcon icon={faFacebook} />
          <span>&nbsp;&nbsp;OPG Škarica</span>
        </p>
      </a>

      <a href="mailto:opgskarica@gmail.com">
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>&nbsp;&nbsp;opgskarica@gmail.com</span>
        </p>
      </a>
    </div>
  );
};

export default Footer;
