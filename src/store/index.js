import { configureStore } from "@reduxjs/toolkit";
import MarosimTuriSlice from "./MarosimTuriSlice";
import NikohSlice from "./NikohSlice";

const store = configureStore({
  reducer: {
    moveCard: MarosimTuriSlice.reducer,
    nikohCard: NikohSlice.reducer,
  },
});

export default store;
