import React from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  const position = [45.5105190562796, 15.693413086588];
  Leaflet.Icon.Default.imagePath =
    "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/"; // marker image

  return (
    <div className="location-container">
      <div className="info">
        <p className="icon">
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>&nbsp;
        </p>
        <h3>Zamršje 35</h3>
        <p> 47000 Karlovac</p>
        <p>Hrvatska</p>
      </div>

      <div className="map">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "100%", minHeight: "100%" }}
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
export default Location;
