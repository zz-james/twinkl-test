import { createSlice } from "@reduxjs/toolkit";

const image = "https://i.ibb.co/q0VXbjd/front.png";
const image2 = "https://iili.io/HuUEZFI.png";

export const initialState = {
  frontImages: [
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
  ],
  active: null,
};

export const foregroundSlice = createSlice({
  name: "foreground",
  initialState,
  reducers: {
    setForeground: (state, action) => {
      state.active = state.frontImages[action.payload];
    },
  },
});

export const { setForeground } = foregroundSlice.actions;
export default foregroundSlice.reducer;
