import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.user = { ...state.user, token: action.payload };
    },
    getUser: (state, action) => {},
    logOut: (state) => {
      state.user = {};
    },
  },
});

export const { setUser, setToken, logOut } = userSlice.actions;
export const userSelectors = { user: (state) => state.user.user};

export default userSlice.reducer;