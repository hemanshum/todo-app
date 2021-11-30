import React from "react";
import { render, fireEvent, waitFor } from "../../src/test-utils";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

import HomeScreen from "../../src/screens/main/HomeScreen";

describe("HomeScreen", () => {
  it("should fetch todo from server", async () => {
    const { findAllByText } = render(<HomeScreen />);

    const todos = await findAllByText(/task$/i);
    expect(todos.length).toBe(2);
  });
  it.todo("should create new todo");
  it.todo("should find a todo and mark it as done");
  it.todo("should find a todo and remove it");
});
// async () => {
// const { getByTestId, queryByText } = render(<HomeScreen />);
// const textInput = getByTestId("enterYourTask");
// const submitBtn = getByTestId("submitYourTask");
// fireEvent.changeText(textInput, "todo task 1");
// fireEvent.press(submitBtn);
// const createdTask = queryByText("todo task 1");
// await waitFor(() => expect(createdTask).not.toBeNull());
// }
