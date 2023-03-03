import React from "react";
import Slice from "./Slice";

const Slices = ({ sliceSize, slices, frontImage, backgroundImageSrc }) => {
  let slicesNumber = [];
  for (let i = 0; i < slices; i++) {
    slicesNumber.push({ id: i });
  }

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
