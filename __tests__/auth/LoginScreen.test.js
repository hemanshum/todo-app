import React from "react";

import { render, fireEvent, act } from "../../src/test-utils";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

import LoginScreen from "../../src/screens/auth/LoginScreen";

it("should render login form", () => {
  const { getByTestId, getByText } = render(
    <LoginScreen route={{ params: { signupStatus: null } }} />
  );

  const screenTitle = getByText(/Login Now!/i);
  const textInputUser = getByTestId(/username/i);
  const textInputPassword = getByTestId(/password/i);
  const submitButton = getByTestId(/submit/i);
  const navToSignupButton = getByTestId(/navigateToSignup/i);

  expect(screenTitle.props.children).toBe("Login Now!");
  expect(textInputUser).not.toBeNull();
  expect(textInputPassword).not.toBeNull();
  expect(submitButton).not.toBeNull();
  expect(navToSignupButton).not.toBeNull();
});

it("should show form login validation error", async () => {
  const { getByTestId, queryByText } = render(
    <LoginScreen route={{ params: { signupStatus: null } }} />
  );
  const textInputUser = getByTestId("username");
  const textInputPassword = getByTestId("password");
  const submitButton = getByTestId(/submit/i);

  await act(async () => {
    fireEvent.changeText(textInputUser, "");
    fireEvent.changeText(textInputPassword, "abcd12");
    fireEvent.press(submitButton);
  });

  const errorMsgforUsername = queryByText("username is a required field");
  expect(errorMsgforUsername.props.children).toBeTruthy();

  await act(async () => {
    fireEvent.changeText(textInputUser, "Username");
    fireEvent.changeText(textInputPassword, "");
    fireEvent.press(submitButton);
  });

  const errorMsgforPassword = queryByText(
    "password must be at least 6 characters"
  );
  expect(errorMsgforPassword.props.children).toBeTruthy();

  await act(async () => {
    fireEvent.changeText(textInputUser, "Username");
    fireEvent.changeText(textInputPassword, "abcd");
    fireEvent.press(submitButton);
  });

  const errorMsgforSixDigitPassword = queryByText(
    "password must be at least 6 characters"
  );
  expect(errorMsgforSixDigitPassword.props.children).toBeTruthy();
});

it("should submit login form succesfully", async () => {
  const mockOnSubmit = jest.fn();
  const { getByTestId } = render(
    <LoginScreen
      onSubmit={mockOnSubmit}
      route={{ params: { signupStatus: null } }}
    />
  );
  const textInputUser = getByTestId("username");
  const textInputPassword = getByTestId("password");
  const submitButton = getByTestId(/submit/i);

  await act(async () => {
    fireEvent.changeText(textInputUser, "Hemanshu");
    fireEvent.changeText(textInputPassword, "abcd1234");
    fireEvent.press(submitButton);
  });

  expect(mockOnSubmit).toHaveBeenCalled();
});
