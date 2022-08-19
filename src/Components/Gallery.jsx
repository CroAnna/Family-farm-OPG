import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
      { slika: lavanda1 },
      { slika: lavanda2 },
      { slika: lavanda3 },
      { slika: lavanda4 },
      { slika: lavanda5 },
      { slika: lavanda6 },
      { slika: lavanda7 },
      { slika: lavanda8 },
      { slika: lavanda9 },
      { slika: lavanda10 },
    ];
    return (
      <div className="galerija-container">
        <div className="grupa">
          <h2>Lavanda</h2>
          <Slider {...settings} style={{ display: "flex" }}>
            {lavanda.map((item, index) => (
              <div key={index}>
                <img src={item.slika} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
