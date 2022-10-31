import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  kuyov: "",
  kelin: "",
  mehmon: "",
  vaqt: "",
  viloyat: "",
  tuman: "",
  toyxona: "",
  card3: false,
};

const NikohSlice = createSlice({
  name: "addNikohInfo",
  initialState,
  reducers: {
    nikohInfo(state, action) {
      state.kuyov = action.payload.kuyov;
      state.kelin = action.payload.kelin;
      state.mehmon = action.payload.mehmon;
      state.vaqt = action.payload.vaqt;
      state.viloyat = action.payload.viloyat;
      state.tuman = action.payload.tuman;
      state.toyxona = action.payload.toyxona;
      state.card3 = true;
    },
  },
});

export const sliceNikohActions = NikohSlice.actions;

export default NikohSlice;
