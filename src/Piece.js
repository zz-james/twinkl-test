import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slices from "./Slices";
import { setForeground } from "./foregroundSlice";

const MODES = [3, 5, 9];

const StripSequencing = () => {
  const [slices, setSlices] = useState(null);
  const [active, setActive] = useState(false);
  const [slicesNumber, setSlicesNumber] = useState(null);

  const frontImages = useSelector((state) => state.foreground.frontImages);
  const frontImage = useSelector((state) => state.foreground.active);
  const bgImageSrc = useSelector((state) => state.active);

  const dispatch = useDispatch();

  const sliceSize = {
    width: 848,
    height: 477
  };

  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(${slices},${sliceSize.width / slices}px)`
  };

  const getSlicesNumber = (item) => {
    let array = [];
    for (let i = 0; i < item; i++) {
      array.push({ id: i });
    }
    setSlicesNumber(array);
  };

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
        frontImage={frontImage || {}}
        backgroundImageSrc={bgImageSrc}
      />
    </div>
  ) : (
    <div style={{ display: "flex" }}>
      {frontImages.map((img, index) => (
        <button key={img.src} onClick={() => dispatch(setForeground(index))}>
          {img.label}
        </button>
      ))}
      {MODES.map((item) => (
        <button key={item} onClick={() => init(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default StripSequencing;
