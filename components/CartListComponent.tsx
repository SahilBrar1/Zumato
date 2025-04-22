import React from "react";
import { StyleSheet, View } from "react-native";
import CartItem from "./CartItem";

type ItemProps = { title: string; quantity?: number; price?: number };

const CartListComponent = ({ title, quantity, price }: ItemProps) => {
  return (
    <View style={styles.screenContainer}>
      <CartItem title={title} quantity={quantity} price={price} />
    </View>
  );
};
export default CartListComponent;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 8,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
});
