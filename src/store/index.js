import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { card1: true, card2: false };

const sliceOne = createSlice({
  name: "addInitialInfo",
  initialState,
  reducers: {
    moveCard(state) {
      state.card1 = false;
      state.card2 = true;
    },
  },
});

const store = configureStore({ reducer: { moveCard: sliceOne.reducer } });

export const sliceOneActions = sliceOne.actions;
export default store;
