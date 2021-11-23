import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigation from "./src/navigation/AppNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
