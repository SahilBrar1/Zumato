import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import DetailsScreen from "./screens/DetailsScreen";
import CartScreen from "./screens/CartScreen";
import { ImageBackground } from "react-native";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import CustomHeaderTitle from "./components/CustomHeaderTitle";
import DetailHeader from "./components/DetailHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");

      if (isLoggedIn === "true") {
        setInitialRoute("Home");
      } else {
        setInitialRoute("Login");
      }
    };
    checkLoginStatus();
  }, []);

  if (initialRoute === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
