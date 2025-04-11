import React from "react";
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

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: () => <CustomHeaderTitle /> }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerTitle: () => <DetailHeader /> }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerTitle: () => <CustomHeaderTitle /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
