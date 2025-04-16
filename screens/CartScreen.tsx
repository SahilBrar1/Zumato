import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";

const CartScreen = () => {
  return (
    <>
      <Header title="Cart" />
      <Cart />
    </>
  );
};

export default CartScreen;
