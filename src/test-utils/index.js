import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react-native";
import { Provider as PaperProvider } from "react-native-paper";
import store from "../store";

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <PaperProvider>{children}</PaperProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
