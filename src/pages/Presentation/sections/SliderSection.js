import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
// import card1 from "../../../assets/imagesWeb/images/cardImages/card1.jpg";
// import card2 from "../../../assets/imagesWeb/images/cardImages/card2.jpg";
// import card3 from "../../../assets/imagesWeb/images/cardImages/dcard3.jpg";

const SliderSection = () => {
  const slides = [
    {
      link: "https://indieweb.social/@kendalmintcode",
      imageUrl:
        "https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "https://k-tech.systems",
      imageUrl:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "https://indieweb.social/@kendalmintcode",
      imageUrl:
        "https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "https://indieweb.social/@kendalmintcode",
      imageUrl:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "https://indieweb.social/@kendalmintcode",
      imageUrl:
        "https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "https://k-tech.systems",
      imageUrl:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "https://indieweb.social/@kendalmintcode",
      imageUrl:
        "https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "https://indieweb.social/@kendalmintcode",
      imageUrl:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
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
            <a
              href={slide.link}
              rel="noopener noreferrer"
              className="block w-80% h-64 focus:outline-none focus:ring focus:border-blue-300"
            >
              <img
                src={slide.imageUrl}
                alt={slide.link}
                className="w-auto h-auto object-cover rounded-xl transition-transform transform scale-100 hover:scale-105 mx-2 p-2"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SliderSection;
