import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setUserEmail, setUserName } = userSlice.actions;
export default userSlice.reducer;
