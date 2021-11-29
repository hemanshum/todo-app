import React from "react";
import { render, fireEvent, waitFor } from "../../src/test-utils";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

import HomeScreen from "../../src/screens/main/HomeScreen";

describe("HomeScreen", () => {
  it("should create new todo", async () => {
    // const { getByTestId, queryByText } = render(<HomeScreen />);
    // const textInput = getByTestId("enterYourTask");
    // const submitBtn = getByTestId("submitYourTask");
    // fireEvent.changeText(textInput, "My First Todo");
    // fireEvent.press(submitBtn);
    // const createdTask = queryByText("My First Todo");
    // await waitFor(() => expect(createdTask).not.toBeNull());
  });
  it.todo("should find a todo and mark it as done");
  it.todo("should find a todo and remove it");
});
