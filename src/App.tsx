import React, { useState, useEffect } from "react";
import "./index.scss";
import "flexboxgrid";
import { ChoseSlide } from "./components/slider/choseSlide";
import { SliderContent } from "./components/slider/sliderContent";
import { SwipeDirection } from "./helperFunctions/swipeDirection";
import { Content } from "./data/content";
import { GoToSlide } from "./helperFunctions/changeSlides";
import { NextSlide } from "./helperFunctions/nextSlide";
import { PrevSlide } from "./helperFunctions/prevSlide";

const SliderApp = () => {
  const [slideSwitch, setSlideSwitch] = useState(0);
  const [startPosition, setStartPosition] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(0);
  const [sliderInput, setSliderInput] = useState(slideSwitch + 1);
  const [animation, setAnimation] = useState("");

  const slideNextHandler = () => {
    setAnimation("");
    setSlideSwitch(NextSlide(slideSwitch, Content.length));
    setSliderInput(NextSlide(slideSwitch, Content.length) + 1);
  };

  const slidePrevHandler = () => {
    setAnimation("");
    setSlideSwitch(PrevSlide(slideSwitch, Content.length) - 1);
    setSliderInput(PrevSlide(slideSwitch, Content.length));
  };

  useEffect(() => {
    setAnimation("animation")
  }, [slideSwitch]);

  const startHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartPosition(e.touches[0].clientX);
  };
  const endHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    setSwipeDirection(e.touches[0].clientX);
  };

  const swipeHandler = () => {
    if (SwipeDirection(startPosition, swipeDirection) < 0) {
      slidePrevHandler();
    } else if (SwipeDirection(startPosition, swipeDirection) > 0) {
      slideNextHandler();
    }
    setSwipeDirection(0);
  };

  const slideInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      setSliderInput(parseInt(e.target.value, 10));
    }
  };

  const slideChangeHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSliderInput(GoToSlide(sliderInput, slideSwitch) + 1);
    setSlideSwitch(GoToSlide(sliderInput, slideSwitch));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-xs-12">
          <div>
            <SliderContent
              title={Content[slideSwitch].title}
              paragraph={Content[slideSwitch].paragraph}
              image={Content[slideSwitch].image}
              endHandler={(e) => endHandler(e)}
              startHandler={(e) => startHandler(e)}
              swipeHandler={() => swipeHandler()}
              slideNextHandler={() => slideNextHandler()}
              slidePrevHandler={() => slidePrevHandler()}
              animation={animation}
            />
            <ChoseSlide
              slideInputHandler={(e) => slideInputHandler(e)}
              slideChangeHandler={(e) => slideChangeHandler(e)}
              inputValue={sliderInput}
              totalSlides={Content.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderApp;
