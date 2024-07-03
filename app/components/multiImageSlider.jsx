import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const MultiImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed in milliseconds
    // // responsive: [
    // //   {
    // //     breakpoint: 760, // Adjust breakpoint according to your preference
    // //     settings: {
    // //       slidesToShow: 2, // Show two images per slide on smaller screens
    // //     },
    // //   },
    // ],
  };

  return (
    <Slider {...settings} className="cardc">
      {images.map((image, index) => (
        <div key={index} className="slick">
          <div className="relative mb-20">
            <Image
              src={image.image}
              alt={image.alt}
              layout="responsive"
              width={1920}
              height={1080}
              className="object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-start  bg-black bg-opacity-50">
              <div className="container md:mt-20">
                <div className="row justify-start">
                  <div className="md:flex flex-col p-7 gap-5  w-11/12 m-auto">
                    <h5 className="text-white md:font-bold text-uppercase mb-3 animated slideInDown w-11/12">
                      {image.title}
                    </h5>
                    <h1 className="text-success md:text-6xl text-uppercase font-bold mb-4 animated slideInDown">
                      {image.subtitle}
                    </h1>
                    <p className="text-white md:text-2xl text-uppercase font-medium md:mb-4 pb-2">
                      {image.description}
                    </p>
                    <div className="flex flex-row">
                      <Link
                        href="/"
                        className="btn bg-success hidden md:block w-max text-white rounded py-3 px-5 mr-3 animated slideInLeft"
                      >
                        Read More
                      </Link>
                      <Link
                        href="/"
                        className="btn bg-secondary hidden md:block w-max rounded text-white py-3 px-5 animated slideInRight"
                      >
                        Free Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MultiImageSlider;
