import React from "react";
import "./slider.scss";

type Props = {
    slideNextPrevHandler: () => void;
    iconName: string;
    direction: string;

};

export const SliderButton = ({
  slideNextPrevHandler, iconName, direction
}: Props) => {
  return (
    <button type="button" className={`${"button--direction "}` + `${direction}`} onClick={() => slideNextPrevHandler()}>
    <i className={`${iconName}`}></i>
    </button>
  )
};
