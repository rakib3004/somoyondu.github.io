import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
    return () => {
      if (timeID) clearTimeout(timeID);
    };
  }, [slideDone, activeIndex]);

  const slideNext = () => {
    setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
  };

  const slidePrev = () => {
    setActiveIndex((val) => (val <= 0 ? children.length - 1 : val - 1));
  };

  const AutoPlayStop = () => {
    if (timeID) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      <div className="slider-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => (
          <div className="slide" key={index}>
            <div className="slide-content">
              {child}
            </div>
          </div>
        ))}
      </div>

      <div className="slider-indicators">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            className={`indicator ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <button className="slider-btn prev" onClick={slidePrev}>
        &lt;
      </button>
      <button className="slider-btn next" onClick={slideNext}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;