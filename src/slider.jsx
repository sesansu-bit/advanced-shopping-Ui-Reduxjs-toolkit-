import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

const Slider = ({ images, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);

  const totalSlides = images.length;

  // Automatically change the slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNextSlide();
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentSlide, interval]);

  // Handle moving to the next slide
  const handleNextSlide = () => {
    if (currentSlide === totalSlides - 1) {
      setCurrentSlide(totalSlides); // Move to the cloned slide
      setIsAnimating(true); // Enable transition
    } else {
      setCurrentSlide(currentSlide + 1);
      setIsAnimating(true); // Enable transition
    }
  };

  // Handle transition end to reset the slide position
  const handleTransitionEnd = () => {
    if (currentSlide === totalSlides) {
      setCurrentSlide(0);
      setIsAnimating(false); // Disable transition for instant reset
    }
  };

  // Handle indicator click to jump to the specific slide
  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    setIsAnimating(true); // Enable transition
  };

  return (
    <>
    <div className={styles["slider-container"]}>
      <div
        className={styles["slider"]}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
        ref={sliderRef}
      >
        {/* Render all images */}
        {images.map((image, index) => (
          <div key={index} className={styles["slide"]}>
            <img src={image} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
        {/* Cloned first slide */}
        <div className={styles["slide"]}>
          <img src={images[0]} alt="Slide 0 clone" className="slide-image" />
        </div>
      </div>

      {/* Round indicators */}
      <div className={styles["indicators"]}>
        {images.map((_, index) => (
          <div
            key={index}
            className={
              index === (currentSlide % totalSlides) ? 'indicator active-indicator' : 'indicator'
            }
            onClick={() => handleIndicatorClick(index)} // Jump to slide on indicator click
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Slider;

