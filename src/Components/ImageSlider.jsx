import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { imageGroups } from "../Data/image_groups";

export default class Gallery extends Component {
  // has to be this type (not as arrow function) - responsive rendering error
  render() {
    const { itemName } = this.props;
    console.log(itemName);

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

    const selectedGroup = imageGroups[itemName] || [];
    return (
      <div className="galerija-container">
        <div className="grupa">
          <Slider {...settings} style={{ display: "flex" }}>
            {selectedGroup.map((item, index) => (
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
