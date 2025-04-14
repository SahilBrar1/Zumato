import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { getHeight } from "../utils/Stylehelper";
import colors from "../tokens/colors";

interface AppButtonProps {
  title: string;
  quantity?: number;
}

const CartItem: React.FC<AppButtonProps> = ({ title, quantity }) => (
  <TouchableOpacity activeOpacity={0.4} style={[styles.appButtonContainer]}>
    <Text style={styles.appButtonText}>{title}</Text>
    <Text style={styles.appButtonText}>{quantity}</Text>
  </TouchableOpacity>
);

export default CartItem;

const styles = StyleSheet.create({
  appButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.cartListColor,
    // elevation: 8,
    borderRadius: 10,
    padding: 8,
    height: getHeight(50),
    width: "100%",
  },
  appButtonText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    margin: 5,
  },
});
