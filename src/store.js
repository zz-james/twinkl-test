/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./activeSlice";
import foregroundReducer from "./foregroundSlice";

const store = configureStore({
  reducer: {
    active: activeReducer,
    foreground: foregroundReducer
  }
});

export default store;
