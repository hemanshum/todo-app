import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { sessionToken: null },
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
    errorSigningUp: (state) => {
      state.signUpError = "User already registred!";
    },
    clearSignupError: (state) => {
      state.signUpError = null;
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
export const {
  signupSuccess,
  errorSigningUp,
  clearSignupError,
  startLoading,
  stopLoading,
  setUser,
} = authSlice.actions;

export default authSlice.reducer;
