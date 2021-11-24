import React from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import store from "./src/store";
import { navigationRef } from "./src/navigation/RootNavigation";
import AppNavigation from "./src/navigation/AppNavigation";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <PaperProvider>
          <AppNavigation />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
