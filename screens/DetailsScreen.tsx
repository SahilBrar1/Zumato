import React from "react";
import { View, Text } from "react-native";
import CartView from "../components/CartView";
import ViewCart2 from "../components/ViewCart2";
import ViewCart3 from "../components/ViewCart3";

const DetailsScreen = () => {
  return (
    <View>
      <CartView />
      <ViewCart2 />
      <ViewCart3 />
    </View>
  );
};

export default DetailsScreen;
