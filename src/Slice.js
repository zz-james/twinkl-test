import React from "react";

const Slice = ({ id, sliceSize, slices, frontImage, backgroundImage }) => {
  const left = 0;
  const background = `url(${frontImage}) left ${0}px top ${0}px no-repeat, url(${backgroundImage}) left ${0}px top ${0}px no-repeat`;

  const style = {
    height: `${sliceSize.height}px`,
    width: `${sliceSize.width / slices}px`,
    background,
    backgroundPosition: `left -${left}px top 0px`,
    backgroundSize: `283px, ${sliceSize.height * 1.78}px`,
    border: "1px solid red",
  };

  return <div style={style} />;
};

export default Slice;
