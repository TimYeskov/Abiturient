import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import signUpSlice from "./slices/signUpSlice";
export const store = configureStore({
  reducer: {
    themeSlice,
    signUpSlice,
  },
});
