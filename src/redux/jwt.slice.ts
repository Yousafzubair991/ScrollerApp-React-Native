import { createSlice } from "@reduxjs/toolkit";
export const jwtSlice = createSlice({
  name: "jwt",
  initialState: {
    token: "",
    user_id: "",
  },
  reducers: {
    addJwtToken: (state, action) => {
      state.token = action.payload.token;
      // state.user_id = action.payload.user_id
    },
    removeJwtToken: (state) => {
      state.token = "";
      // state.user_id = action.payload.user_id
    },
  },
});

export const { addJwtToken, removeJwtToken } = jwtSlice.actions;
export default jwtSlice.reducer;
