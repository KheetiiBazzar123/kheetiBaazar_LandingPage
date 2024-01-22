import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../../assets/imagesWeb/images/autoScrollImage/ImgAutoScroll1.jpg";
import image2 from "../../../assets/imagesWeb/images/autoScrollImage/ImageAutoScroll2.jpg";
import image3 from "../../../assets/imagesWeb/images/autoScrollImage/ImageAutoScroll3.jpg";
import image4 from "../../../assets/imagesWeb/images/autoScrollImage/ImageAutoScroll4.avif";
import image5 from "../../../assets/imagesWeb/images/autoScrollImage/ImageAutoScroll5.png";
import image6 from "../../../assets/imagesWeb/images/autoScrollImage/d57d25cb8c6fdd2163c677f9fb6d0275.gif";

const SliderSection = () => {
  const slides = [
    {
      link: "https://indieweb.social/@kendalmintcode",
      imageUrl: image1,
    },
    {
      link: "https://k-tech.systems",
      imageUrl: image2,
    },
    {
      link: "https://indieweb.social/@kendalmintcode",
      imageUrl: image3,
    },

    {
      link: "https://k-tech.systems",
      imageUrl: image6,
    },
    {
      link: "https://indieweb.social/@kendalmintcode",
      imageUrl: image4,
    },
    {
      link: "https://indieweb.social/@kendalmintcode",
      imageUrl: image5,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: false,
    touchMove: true,
    draggable: true,
  };
  return (
    <div className="my-7 mx-4 box-border">
      <Slider {...settings} className="rounded-lg">
        {slides.map((slide, index) => (
          <div key={index} className="w-80% md:w-1/2 lg:w-1/3 xl:w-1/4 inline-block rounded-e-xl">
            {/* <a
              href={slide.link}
              rel="noopener noreferrer"
              className="block w-80% h-64 focus:outline-none focus:ring focus:border-blue-300"
            > */}
            <img
              src={slide.imageUrl}
              alt={slide.link}
              className="w-auto h-auto object-cover-fill rounded-xl transition-transform transform scale-100 hover:scale-105 mx-2 p-2"
            />
            {/* </a> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SliderSection;
