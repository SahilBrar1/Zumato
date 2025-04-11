import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface AppButtonProps {
  onPress?: () => void;
  title: string;
  color?: string;
}

const CartItem: React.FC<AppButtonProps> = ({ onPress, title, color }) => (
  <TouchableOpacity
    activeOpacity={0.4}
    onPress={onPress}
    style={[
      styles.appButtonContainer,
      color ? { backgroundColor: color } : null,
    ]}
  >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default CartItem;

const styles = StyleSheet.create({
  appButtonContainer: {
    // elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  appButtonText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
