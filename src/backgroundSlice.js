import { createSlice } from "@reduxjs/toolkit";
const bgImage = "https://www.teahub.io/photos/full/256-2563481_painting.jpg";
export const backgroundSlice = createSlice({
  name: "background",
  initialState: bgImage,
  reducers: {},
});

export default backgroundSlice.reducer;
