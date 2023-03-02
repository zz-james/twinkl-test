import React from "react";

const Slice = ({ id, sliceSize, slices, frontImage, backgroundImageSrc }) => {
  const {
    src: foregroundImageSrc,
    width: foregroundImageWidth = 0
  } = frontImage;

  const foregroundRenderWidth = 283; // in px

  const sliceWidth = sliceSize.width / slices;
  const sliceOffset = -(id * sliceWidth);

  const foregroundScaling = foregroundRenderWidth / foregroundImageWidth;

  const foregroundOffset = foregroundImageWidth // avoid possible divide by zero if no foreground image set
    ? sliceOffset +
      sliceSize.width / 2 -
      foregroundScaling * (foregroundImageWidth / 2) // move to midpoint of scaled forground image
    : 0;

  const bgStyle = {
    height: `${sliceSize.height}px`,
    width: `${sliceWidth}px`,
    background: `url(${backgroundImageSrc}) left -${
      id * sliceWidth
    }px top 0px no-repeat`,
    backgroundSize: `cover`,
    border: "1px solid red",
    backgroundClip: "padding-box",
    position: "relative"
  };

  const fgStyle = {
    ...bgStyle,
    border: "1px solid transparent",
    background: `url(${foregroundImageSrc}) left ${foregroundOffset}px center no-repeat`,
    backgroundSize: `${foregroundRenderWidth}px auto`,
    backgroundClip: "padding-box",
    zIndex: 1,
    position: "absolute"
  };

  return (
    <div style={bgStyle}>
      <div style={fgStyle}></div>
    </div>
  );
};

export default Slice;
