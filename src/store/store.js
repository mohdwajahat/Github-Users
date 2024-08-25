import { configureStore } from "@reduxjs/toolkit";
import githubSlice from "./githubSlice";

const store = configureStore({
  reducer: {
    github: githubSlice,
  },
});

export default store;