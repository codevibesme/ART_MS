import { User } from "@/app/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState: { user: User | null; token: string | null } = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
