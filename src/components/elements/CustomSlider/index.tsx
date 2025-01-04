import React from "react";
import Slider from "react-slick";
import { CustomSliderProps } from "./interface";
import { CUSTOM_SLIDER_SETTINGS } from "./constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CustomSlider: React.FC<CustomSliderProps> = ({ children }) => {
  return <Slider {...CUSTOM_SLIDER_SETTINGS}>{children}</Slider>;
};
