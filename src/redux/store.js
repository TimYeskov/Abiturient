import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
export const store = configureStore({
  reducer: {
    themeSlice,
  },
});
