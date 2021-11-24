import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent } from "@testing-library/react-native";
import store from "../src/store";

import AppNavigator from "../src/navigation/AppNavigation";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Testing react navigation", () => {
  test("page contains the header Signup Now", async () => {
    const component = (
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    );

    const { findByText } = render(component);

    const signupTitle = await findByText("Signup Now!");

    await expect(signupTitle).toBeTruthy();
  });

  test("clicking on navigate to login screen to switch screen", async () => {
    const component = (
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    );

    const { findByText, getByText } = render(component);
    const clickToLoginScreen = await findByText("Already Registred? Login.");

    fireEvent(clickToLoginScreen, "press");
    const loginScreen = getByText("Login Now!");
    expect(loginScreen).toBeTruthy();

    const clickToSignupScreen = getByText("New user? Signup.");
    fireEvent(clickToSignupScreen, "press");
    const signupScreen = getByText("Signup Now!");
    expect(signupScreen.props.children).toBe("Signup Now!");
  });
});
