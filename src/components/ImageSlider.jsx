import { useState } from "react";
const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const rightArrowStyles = "absolute top-1/2 transform -translate-y-1/2 right-1 text-white text-lg z-10 cursor-pointer";

const leftArrowStyles = "absolute top-1/2 transform -translate-y-1/2 left-1 text-white text-lg z-10 cursor-pointer";

const sliderStyles = "relative h-full";

const dotsContainerStyles = "flex justify-center text-32100F";

const dotStyle = "mx-3 cursor-pointer text-20";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className={`${sliderStyles}`}>
      <div>
        <div onClick={goToPrevious} className={`${leftArrowStyles}`}>
          ❰
        </div>
        <div onClick={goToNext} className={`${rightArrowStyles}`}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div className={`${dotsContainerStyles}`}>
        {slides.map((slide, slideIndex) => (
          <div
            className={`${dotStyle}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;