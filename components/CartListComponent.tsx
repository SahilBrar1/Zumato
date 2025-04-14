import React from "react";
import { StyleSheet, View } from "react-native";
import CartItem from "./CartItem";

type ItemProps = { title: string; quantity?: number };

const CartListComponent = ({ title, quantity }: ItemProps) => {
  return (
    <View style={styles.screenContainer}>
      <CartItem title={title} quantity={quantity} />
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
