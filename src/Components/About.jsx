import React, { useEffect } from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import Aos from "aos";
import "aos/dist/aos.css";

const Onama = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, anchorPlacement: "top" });
  }, []);
  const position = [45.5105190562796, 15.693413086588];
  Leaflet.Icon.Default.imagePath =
    "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/"; // marker image

  return (
    <div className="location-container" id="onama">
      <div className="info" data-aos="fade-right" data-aos-anchor=".info-phone">
        <div className="info-address">
          <span className="icon">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>&nbsp;&nbsp;
          </span>
          <h3>Zamršje 35,</h3>
          <p> 47000 Karlovac,</p>
          <p>Hrvatska</p>
        </div>
        <div className="info-phone">
          <span className="icon">
            <FontAwesomeIcon icon={faInstagram} />
            &nbsp;
          </span>
          <a href="https://www.instagram.com/opgskarica/">
            <p>
              <span>&nbsp;@opgskarica</span>
            </p>
          </a>
        </div>
        <div className="info-phone">
          <span className="icon">
            <FontAwesomeIcon icon={faFacebook} />
            &nbsp;
          </span>
          <a href="https://www.facebook.com/opgskarica/">
            <p>
              <span>&nbsp;OPG Škarica</span>
            </p>
          </a>
        </div>
        <div className="info-phone">
          <span className="icon">
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>&nbsp;&nbsp;
          </span>
          <h3>091 502 6669</h3>
        </div>
      </div>

      <div className="map" data-aos="fade-left" id="lokacija">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "100%", minHeight: "100%" }}
          scrollWheelZoom={false}
          dragging={false}
        >
          <TileLayer
            className="slika"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Ovdje se nalazi naš OPG</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};
export default Onama;
