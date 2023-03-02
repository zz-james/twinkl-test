import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slices from "./Slices";

const MODES = [3, 5, 9];

const StripSequencing = () => {
  const [slices, setSlices] = useState(null);
  const [active, setActive] = useState(false);
  const [slicesNumber, setSlicesNumber] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const bgImage = useSelector((state) => state.active);
  const image = "https://i.ibb.co/q0VXbjd/front.png";
  const image2 = "https://iili.io/HuUEZFI.png";

  const sliceSize = {
    width: 848,
    height: 477,
  };

  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(${slices},${sliceSize.width / slices}px)`,
  };

  const getSlicesNumber = (item) => {
    let array = [];
    for (let i = 0; i < item; i++) {
      array.push({ id: i });
    }
    setSlicesNumber(array);
  };

  const frontImages = [
    {
      width: 712,
      height: 1200,
      src: image,
      label: "First image",
    },
    {
      width: 1174,
      height: 1200,
      src: image2,
      label: "Second image",
    },
  ];

  const init = (item) => {
    setSlices(item);
    getSlicesNumber(item);
  };

  useEffect(() => {
    if (slices) {
      setActive(true);
    }
  }, [slices]);

  return active ? (
    <div style={style}>
      <Slices
        sliceSize={sliceSize}
        slicesNumber={slicesNumber}
        slices={slices}
        frontImage={imageSrc}
        backgroundImage={bgImage}
      />
    </div>
  ) : (
    <div style={{ display: "flex" }}>
      {frontImages.map((img) => (
        <button onClick={() => setImageSrc(img.src)}>{img.label}</button>
      ))}
      {MODES.map((item) => (
        <button onClick={() => init(item)}>{item}</button>
      ))}
    </div>
  );
};

export default StripSequencing;
