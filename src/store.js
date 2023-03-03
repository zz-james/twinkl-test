import { configureStore } from "@reduxjs/toolkit";
import backgroundReducer from "./backgroundSlice";
import foregroundReducer from "./foregroundSlice";

const store = configureStore({
  reducer: {
    background: backgroundReducer,
    foreground: foregroundReducer,
  },
});

export default store;
