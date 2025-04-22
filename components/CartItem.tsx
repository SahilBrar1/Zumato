import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { getHeight } from "../utils/Stylehelper";
import colors from "../tokens/colors";

interface AppButtonProps {
  title: string;
  quantity?: number;
  price?: number;
}

const CartItem: React.FC<AppButtonProps> = ({ title, quantity, price }) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
    <View style={styles.firstView}>
      <Text numberOfLines={1} style={styles.titleText}>
        {title}
      </Text>
    </View>

    <View style={styles.secondView}>
      {quantity !== undefined && (
        <Text style={styles.metaText}>Qty: {quantity}</Text>
      )}
      {price !== undefined && <Text style={styles.metaText}>₹{price}</Text>}
    </View>
  </TouchableOpacity>
);

export default CartItem;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    height: getHeight(70),
  },
  firstView: {
    flex: 2,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  secondView: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  metaText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
});
