import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DashState {
  menu: number;
}

const initialState: DashState = {
  menu: 0,
};

export const dashSlice = createSlice({
  name: "dash",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<number>) => {
      state.menu = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMenu } = dashSlice.actions;

export default dashSlice.reducer;
