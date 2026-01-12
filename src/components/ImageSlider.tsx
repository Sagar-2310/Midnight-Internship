"use client";

import React from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  // 2. Explicitly typing settings resolves TypeScript property errors
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const images = [
    "https://picsum.photos/800/400?random=1",
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3",
    "https://picsum.photos/800/400?random=4",
  ];

  return (
    <div className="image-slider-container" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              style={{ width: "100%", borderRadius: "8px", display: "block" }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}