import React, { useState } from "react";
import { registerRootComponent, AppLoading } from "expo";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import {
  SafeAreaProvider,
  initialWindowSafeAreaInsets,
} from "react-native-safe-area-context";

import { RootNavigatorManager } from "./app/navigation/welcome-navigator";
import { store } from "./app/app.store";

const App = () => {
  const [isLoadingComplete, setLoadingState] = useState(false);

  const handleLoadingSuccess = () => {
    setLoadingState(true);
  };

  const startAppAsync = () => {
    return Font.loadAsync({
      Montserrat: require("./app/theme/fonts/Montserrat-Regular.ttf"),
    });
  };

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={startAppAsync}
        onFinish={handleLoadingSuccess}
        autoHideSplash
      />
    );
  }
  return (
    <Provider store={store as any}>
      <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
        <RootNavigatorManager />
      </SafeAreaProvider>
    </Provider>
  );
};

export default registerRootComponent(App);
