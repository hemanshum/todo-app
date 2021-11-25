import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent } from "@testing-library/react-native";
import store from "../src/store";

import AppNavigator from "../src/navigation/AppNavigation";

// jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Testing react navigation", () => {
  test.todo("page contains the header Signup Now");
  // , async () => {
  //   const component = (
  //     <Provider store={store}>
  //       <NavigationContainer>
  //         <AppNavigator />
  //       </NavigationContainer>
  //     </Provider>
  //   );
  //   // console.log(store.getState().auth.user.sessionToken);
  //   const { findByText } = render(component);

  //   const signupTitle = await findByText("Login Now!");

  //   await expect(signupTitle).toBeTruthy();
  // });

  test.todo("navigate between signup and login screens");
  // , async () => {
  //   const component = (
  //     <Provider store={store}>
  //       <NavigationContainer>
  //         <AppNavigator />
  //       </NavigationContainer>
  //     </Provider>
  //   );

  //   const { findByText, getByText } = render(component);
  //   const switchToLoginScreenButton = await findByText(
  //     "Already Registred? Login."
  //   );

  //   fireEvent(switchToLoginScreenButton, "press");
  //   const loginScreen = getByText("Login Now!");
  //   expect(loginScreen).toBeTruthy();

  //   const switchToSignupScreenButton = getByText("New user? Signup.");
  //   fireEvent(switchToSignupScreenButton, "press");
  //   const signupScreen = getByText("Signup Now!");
  //   expect(signupScreen.props.children).toBe("Signup Now!");
  // });
});
