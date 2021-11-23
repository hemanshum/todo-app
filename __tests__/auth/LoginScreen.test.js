import React from "react";
import { render } from "../../src/test-utils";

import LoginScreen from "../../src/screens/auth/LoginScreen";

it("should render singup form", () => {
  const { getByTestId, getByText } = render(<LoginScreen />);

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
