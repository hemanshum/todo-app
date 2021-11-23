import React from "react";
import { render } from "../../src/test-utils";

import SignupScreen from "../../src/screens/auth/SignupScreen";

it("should render singup form", () => {
  const { getByTestId, getByText } = render(<SignupScreen />);

  const screenTitle = getByText(/Signup Now!/i);
  const textInputUser = getByTestId(/username/i);
  const textInputPassword = getByTestId(/password/i);
  const submitButton = getByTestId(/submit/i);
  const navToLoginButton = getByTestId(/navigateToLogin/i);

  expect(screenTitle.props.children).toBe("Signup Now!");
  expect(textInputUser).not.toBeNull();
  expect(textInputPassword).not.toBeNull();
  expect(submitButton).not.toBeNull();
  expect(navToLoginButton).not.toBeNull();
});
