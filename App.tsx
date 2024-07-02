import React from "react";
import { LogBox, StatusBar, useColorScheme } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { isAndroid } from "@freakycoder/react-native-helpers";

/**
 * Local Imports
 */
import { store } from "shared/store";
import Navigation from "./src/navigation";

LogBox.ignoreAllLogs();

export const queryClient = new QueryClient();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, [scheme, isDarkMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
