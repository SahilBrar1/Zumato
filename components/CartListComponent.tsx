import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";

import { useState } from "react";
import CartItem from "./CartItem";

type ItemProps = { title: string; id?: number };

const CartListComponent = ({ title }: ItemProps) => {
  let [color, setColor] = useState("#FF6347");
  return (
    <View style={styles.screenContainer}>
      <CartItem title={title} color={color} />
    </View>
  );
};
export default CartListComponent;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
