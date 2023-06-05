import "./Slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
import SliderFormat from "./SliderFormat";
import { useState } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <>
      <div className="Slider-container">
        <i
          className="bi bi-chevron-left arrow-left"
          onClick={() => {
            if (slideIndex !== 0) {
              setSlideIndex(slideIndex - 1);
            } else {
              setSlideIndex(2);
            }
          }}
        ></i>
        <div
          style={{ transform: `translateX(${slideIndex * -100}vw)` }}
          className="slider-wrapper"
        >
          <SliderFormat x={FirstBook} />
          <SliderFormat x={SecondBook} />
          <SliderFormat x={ThirdBook} />
        </div>
        <i
          className="bi bi-chevron-right arrow-right"
          onClick={() => {
            if (slideIndex !== 2) {
              setSlideIndex(slideIndex + 1);
            } else {
              setSlideIndex(0);
            }
          }}
        ></i>
      </div>
    </>
  );
};

export default Slider;
