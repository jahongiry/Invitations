import { createSlice } from "@reduxjs/toolkit";
const initialState = { card1: true, card2: false, card3: false, marosim: "" };

const MarosimTuriSlice = createSlice({
  name: "addInitialInfo",
  initialState,
  reducers: {
    moveToNikoh(state) {
      state.card1 = false;
      state.card2 = true;
      state.marosim = "nikoh";
    },
    moveToOsh(state) {
      state.card1 = false;
      state.card2 = true;
      state.marosim = "osh";
    },
    moveToBeshik(state) {
      state.card1 = false;
      state.card2 = true;
      state.marosim = "beshik";
    },
    moveTugilganKun(state) {
      state.card1 = false;
      state.card2 = true;
      state.marosim = "tugilgan";
    },
    moveToThirdCard(state) {
      state.card1 = false;
      state.card2 = false;
    },
  },
});

export const sliceOneActions = MarosimTuriSlice.actions;

export default MarosimTuriSlice;
