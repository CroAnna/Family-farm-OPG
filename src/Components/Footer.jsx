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
      <p>
        <a href="https://www.instagram.com/opgskarica/">
          <FontAwesomeIcon icon={faInstagram} />
          <span>&nbsp;&nbsp;@opgskarica</span>
        </a>
      </p>
      <p>
        <a href="https://www.facebook.com/opgskarica/">
          <FontAwesomeIcon icon={faFacebook} />
          <span>&nbsp;&nbsp;OPG Škarica</span>
        </a>
      </p>
      <p>
        <a href="mailto:opgskarica@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>&nbsp;&nbsp;opgskarica@gmail.com</span>{" "}
        </a>
      </p>
      <a
        href="https://www.flaticon.com/free-icons/vegetables"
        title="vegetables icons"
        className="hidden"
      >
        Vegetables icons created by Freepik - Flaticon
      </a>
    </div>
  );
};

export default Footer;
