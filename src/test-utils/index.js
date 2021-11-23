import React from "react";
import { render } from "@testing-library/react-native";
import { Provider as PaperProvider } from "react-native-paper";

const AllTheProviders = ({ children }) => {
  return <PaperProvider>{children}</PaperProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
