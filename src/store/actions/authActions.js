import { errorSigningUp, startLoading, stopLoading } from "../slices/authSlice";
import serverAPI from "../../apis/server";

import * as RootNavigation from "../../navigation/RootNavigation";

export const signupUser = (data) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await serverAPI.post("/users", data);
    console.log(response.data);
    dispatch(stopLoading());
    RootNavigation.navigate("Login", { signupStatus: "success" });
  } catch (error) {
    dispatch(errorSigningUp(error.message));
    dispatch(stopLoading());
  }
};
