import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  signUpError: null,
  loginError: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    errorSigningUp: (state, action) => {
      state.signUpError = "User already registred!";
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signupSuccess, errorSigningUp, startLoading, stopLoading } =
  authSlice.actions;

export default authSlice.reducer;
