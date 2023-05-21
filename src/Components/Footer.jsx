import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <a href="/onama">Kontaktirajte nas</a>
      </p>
      <div className="icons">
        <p>
          <a href="https://www.facebook.com/opgskarica/">
            <FontAwesomeIcon className="icon" icon={faFacebook} />
            <span>&nbsp;&nbsp;OPG Škarica</span>
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com/opgskarica/">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            <span>&nbsp;&nbsp;@opgskarica</span>
          </a>
        </p>
        <p>
          <a href="#">
            <FontAwesomeIcon className="icon" icon={faPhone} />
            <span>&nbsp;&nbsp;0915026669</span>
          </a>
        </p>
      </div>
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
