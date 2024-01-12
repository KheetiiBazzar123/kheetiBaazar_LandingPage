import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import card1 from "../../../assets/imagesWeb/images/cardImages/card1.jpg";
import card2 from "../../../assets/imagesWeb/images/cardImages/card2.jpg";
import card3 from "../../../assets/imagesWeb/images/cardImages/dcard3.jpg";

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const imageContainerStyle = {
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    height: "400px",
    objectFit: "cover",
    width: "100%",
  };
  return (
    <div style={{ width: "80%", margin: "auto", height: "300px" }}>
      <Slider {...settings}>
        <div>
          <div style={imageContainerStyle}>
            <img src={card1} alt="Image 1" style={imageStyle} />
          </div>
        </div>
        <div>
          <div style={imageContainerStyle}>
            <img src={card2} alt="Image 2" style={imageStyle} />
          </div>
        </div>
        <div>
          <div style={imageContainerStyle}>
            <img src={card3} alt="Image 2" style={imageStyle} />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;
