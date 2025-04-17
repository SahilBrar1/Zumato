import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getHeight, getWidth } from "../utils/Stylehelper";

const Ratebutton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.rate}>
        <Text style={styles.color}>4.3</Text>
        <Ionicons name="star" color={"yellow"} />
      </TouchableOpacity>
    </View>
  );
};

export default Ratebutton;
const styles = StyleSheet.create({
  rate: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "green",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "top",
    width: getWidth(43),
    height: getHeight(24),
    borderRadius: 5,
    padding: 2,
  },
  color: {
    color: "white",
  },
});
