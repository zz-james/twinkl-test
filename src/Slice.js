import React from "react";

const Slice = ({
  id,
  sliceSize,
  slices,
  frontImage,
  backgroundImageSrc,
  foregroundRenderWidth = 283, //default width for foreground image if none passed
}) => {
  const {
    src: foregroundImageSrc,
    width: foregroundImageWidth = 0,
  } = frontImage;

  const sliceWidth = sliceSize.width / slices;
  const sliceOffset = -(id * sliceWidth);

  const foregroundOffset = foregroundImageWidth // avoid possible divide by zero if no foreground image set
    ? sliceOffset + sliceSize.width / 2 - foregroundRenderWidth / 2 // move to midpoint of scaled forground image
    : 0;

  const bgStyle = {
    height: `${sliceSize.height}px`,
    width: `${sliceWidth}px`,
    background: `url(${backgroundImageSrc}) left -${id *
      sliceWidth}px top 0px no-repeat`,
    backgroundClip: "border-box",
    backgroundSize: "cover",
    border: "1px solid red",
    position: "relative",
  };

  const fgStyle = {
    ...bgStyle,
    background: `url(${foregroundImageSrc}) left ${foregroundOffset}px center no-repeat`,
    backgroundClip: "border-box",
    backgroundSize: `${foregroundRenderWidth}px auto`,
    border: "1px solid transparent",
    zIndex: 1,
    position: "absolute",
  };

  return (
    <div style={bgStyle} data-testid="background">
      <div style={fgStyle} data-testid="foreground"></div>
    </div>
  );
};

export default Slice;
