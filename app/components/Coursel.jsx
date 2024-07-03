// Carousel.jsx
import React from "react";
import MultiImageSlider from "./multiImageSlider";
import image1 from "../../public/img/carousel-1.jpg";
import image2 from "../../public/img/carousel-2.jpg";

const Carousel = () => {
  const images = [
    {
      image: image1,
      alt: 'Carousel Image 1',
      title: 'Transport & Logistics Solution',
      subtitle: '#1 Place For Your Transport Solution',
      description: 'Afri general is a pivotal player in the African market specializing in supplying bulk industrial raw materials, merchandise items, and machines.',
    },
    {
      image: image2,
      alt: 'Carousel Image 2',
      title: 'Transport & Logistics Solution',
      subtitle: '#1 Place For Your Logistics Solution',
      description: 'Afri general is a pivotal player in the African market specializing in supplying bulk industrial raw materials, merchandise items, and machines.',
    },
  ];

  return (
    <div className=" p-0 pb-5">
      <MultiImageSlider images={images} /> {/* Pass the 'images' array to the MultiImageSlider component */}
    </div>
  );
};

export default Carousel;
