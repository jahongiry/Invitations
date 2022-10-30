import { configureStore } from "@reduxjs/toolkit";
import MarosimTuriSlice from "./MarosimTuriSlice";

const store = configureStore({
  reducer: { moveCard: MarosimTuriSlice.reducer },
});

export default store;
