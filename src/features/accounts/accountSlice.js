import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
  login: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: {
      prepare(userName, password) {
        return {
          payload: {
            userName,
            password,
          },
        };
      },
      reducer(state, action) {
        state.userName = action.payload.userName;
        state.password = action.payload.password;
        state.login = true;
      },
    },
    logout(state) {
      state.userName = "";
      state.password = "";
      state.login = false;
    },
  },
});

export const { login, logout } = accountSlice.actions;
export default accountSlice.reducer;
