import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const currentUser = action.payload;
      return { ...state, currentUser };
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
