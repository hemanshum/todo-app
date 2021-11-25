import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  errorSigningUp,
  startLoading,
  stopLoading,
  setUser,
} from "../slices/authSlice";
import serverAPI from "../../apis/server";

import * as RootNavigation from "../../navigation/RootNavigation";

export const signupUserAction = (data) => async (dispatch) => {
  try {
    dispatch(startLoading());
    await serverAPI.post("/users", data);
    dispatch(stopLoading());
    RootNavigation.navigate("Login", { signupStatus: "success" });
  } catch (error) {
    dispatch(errorSigningUp(error.message));
    dispatch(stopLoading());
  }
};

export const loginUserAction = (data) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await serverAPI.get(
      `/login?username=${data.username}&password=${data.password}`
    );
    const stringifiedToken = JSON.stringify(response.data.sessionToken);
    await AsyncStorage.setItem("sessionToken", stringifiedToken);
    dispatch(
      setUser({
        createdAt: response.data.createdAt,
        updatedAt: response.data.updatedAt,
        objectId: response.data.objectId,
        sessionToken: response.data.sessionToken,
        username: response.data.username,
      })
    );
    dispatch(stopLoading());
  } catch (error) {
    console.log(error.message);
  }
};

export const validateSessionToken = (token) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await serverAPI.get("/users/me", {
      headers: {
        "X-Parse-Session-Token": token,
      },
    });
    dispatch(
      setUser({
        createdAt: response.data.createdAt,
        updatedAt: response.data.updatedAt,
        objectId: response.data.objectId,
        sessionToken: token,
        username: response.data.username,
      })
    );
    dispatch(stopLoading());
  } catch (error) {
    console.log(error.message);
    await AsyncStorage.clear();
    RootNavigation.navigate("Login", { signupStatus: null });
  }
};
