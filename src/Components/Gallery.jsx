import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default class Gallery extends Component {
  // has to be this type (not as arrow function) - responsive rendering error
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          // mobile
          breakpoint: 961,
          settings: {
            variableWidth: false,
          },
        },
        {
          // desktop
          breakpoint: 2200,
          settings: {
            variableWidth: true,
          },
        },
      ],
    };

    function SampleNextArrow(props) {
      const { onClick } = props;
      return (
        <div className="arrow" onClick={onClick}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      );
    }
    function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
        <div className="arrow" onClick={onClick}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
      );
    }

    const lavanda = [
      { slika: require("../Images/lavanda1.jpg") },
      { slika: require("../Images/lavanda2.jpg") },
      { slika: require("../Images/lavanda3.jpg") },
      { slika: require("../Images/lavanda4.jpg") },
      { slika: require("../Images/lavanda7.jpg") },
      { slika: require("../Images/lavanda5.jpg") },
      { slika: require("../Images/lavanda6.jpg") },
      { slika: require("../Images/lavanda9.jpg") },
      { slika: require("../Images/lavanda10.jpg") },
      { slika: require("../Images/lavanda8.jpg") },
    ];
    const jaja = [
      { slika: require("../Images/jaja3.jpg") },
      { slika: require("../Images/jaja2.jpg") },
      { slika: require("../Images/jaja7.jpg") },
      { slika: require("../Images/Jaja.jpg") },
      { slika: require("../Images/jaja4.jpg") },
      { slika: require("../Images/jaja5.jpg") },
      { slika: require("../Images/jaja6.jpg") },
    ];
    const hokkaido = [
      { slika: require("../Images/hokkaido2.jpg") },
      { slika: require("../Images/tikve.jpg") },
      { slika: require("../Images/hokkaido3.jpg") },
      { slika: require("../Images/hokkaido1.jpg") },
    ];
    const butternut = [
      { slika: require("../Images/butternut2.jpg") },
      { slika: require("../Images/butternut3.jpg") },
      { slika: require("../Images/butternut1.jpg") },
    ];

    return (
      <div className="galerija-container">
        <div className="grupa">
          <h2>Lavanda</h2>
          <Slider {...settings} style={{ display: "flex" }}>
            {lavanda.map((item, index) => (
              <div key={index} className="slike">
                <img src={item.slika} alt="" />
              </div>
            ))}
          </Slider>
        </div>

        <div className="grupa">
          <h2>Jaja</h2>
          <Slider {...settings} style={{ display: "flex" }}>
            {jaja.map((item, index) => (
              <div key={index} className="slike">
                <img src={item.slika} alt="" />
              </div>
            ))}
          </Slider>
        </div>

        <div className="grupa">
          <h2>Hokkaido tikve</h2>
          <Slider {...settings} style={{ display: "flex" }}>
            {hokkaido.map((item, index) => (
              <div key={index} className="slike">
                <img src={item.slika} alt="" />
              </div>
            ))}
          </Slider>
        </div>

        <div className="grupa">
          <h2>Butternut tikve</h2>
          <Slider {...settings} style={{ display: "flex" }}>
            {butternut.map((item, index) => (
              <div key={index} className="slike">
                <img src={item.slika} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
