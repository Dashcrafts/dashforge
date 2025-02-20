import React, { useEffect } from "react";
import $ from "jquery";
import "ion-rangeslider";
const RangeIconSlider = ({ id, option, className }) => {
  useEffect(() => {
    $(`#${id}`).ionRangeSlider(option);
  }, []);
  return (
    <input
      type="text"
      id={id}
      data-plugin="range-slider"
      className={className}
    />
  );
};
export default RangeIconSlider;
