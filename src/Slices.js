import React from "react";
import Slice from "./Slice";

const Slices = ({
  sliceSize,
  slicesNumber,
  slices,
  frontImage,
  backgroundImageSrc
}) => {
  return slicesNumber.map((slice) => (
    <Slice
      sliceSize={sliceSize}
      key={slice.id}
      id={slice.id}
      slices={slices}
      frontImage={frontImage}
      backgroundImageSrc={backgroundImageSrc}
    />
  ));
};

export default Slices;
