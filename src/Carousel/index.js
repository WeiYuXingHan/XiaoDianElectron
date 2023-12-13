import React, { useState, useEffect } from 'react';
import './Carousel.module.css';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoPlayInterval = 3000;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval); 

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div class="carousel-container">
      <div class="carousel-slide">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            class={index === currentSlide ? 'active' : ''}
          />
        ))}
      </div>
      <button class="prev-button" onClick={prevSlide}>
        &lt;
      </button>
      <button class="next-button" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
