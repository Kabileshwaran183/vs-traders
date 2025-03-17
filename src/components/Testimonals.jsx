import React from "react";
import { Parallax } from "react-parallax";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  { id: 1, name: "Dilshad", text: "Great service!", img: "https://picsum.photos/101/101" },
  { id: 2, name: "Sabir Ali", text: "Loved the experience!", img: "https://picsum.photos/102/102" },
  { id: 3, name: "Dipankar Kumar", text: "Highly recommend!", img: "https://picsum.photos/104/104" },
  { id: 4, name: "Satya Narayan", text: "Amazing support!", img: "https://picsum.photos/103/103" },
];

const Testimonials = () => {
  const settings = {
  
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Parallax bgImage="/award/a boy and camera.webp" strength={1000} className="py-10">
      <div className="container mx-auto px-4">
      
        <h1 className="text-center text-4xl font-bold text-white mb-6">Testimonials</h1>

       
        <div className=" h-auto p-6  gap-6">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="p-6 shadow-md rounded-lg bg-white text-center">
                <img src={data.img} alt={data.name} className="w-20 h-20 rounded-full mx-auto mb-3" />
                <p className="text-gray-600">{data.text}</p>
                <h2 className="text-lg font-semibold text-black mt-2">{data.name}</h2>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Parallax>
  );
};

export default Testimonials;
