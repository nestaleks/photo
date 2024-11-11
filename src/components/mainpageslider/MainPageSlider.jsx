import React, { useState, useEffect } from 'react';
import './MainPageSlider.css';

// Импорт локальных изображений для слайдера
import slide1 from './img/slide1.jpeg';
import slide2 from './img/slide2.jpeg';
import slide3 from './img/slide3.jpeg';
import slide4 from './img/slide4.jpeg';
import slide5 from './img/slide5.jpeg';

const MainPageSlider = ({ autoPlayInterval = 3000 }) => {
  const images = [slide1, slide2, slide3, slide4, slide5]; // Список локальных изображений

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval); // Очистка таймера при размонтировании компонента
  }, [images.length, autoPlayInterval]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="mainpage_top">
        <h1 className="mainpage_title">Anyuta Mishalova</h1>
        <p className="mainpage_text">Every shot is a story, and I’m here to help you tell it.</p>
      </div>
      <div className="slider">
        <div className="slider__image-container">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slider__image"
          />
        </div>
        <button className="slider__button slider__button--prev" onClick={handlePrev}>
          &#10094; {/* Левая стрелка */}
        </button>
        <button className="slider__button slider__button--next" onClick={handleNext}>
          &#10095; {/* Правая стрелка */}
        </button>
      </div>
    </div>
  );
};

export default MainPageSlider;
