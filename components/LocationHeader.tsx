import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { getHeight, getWidth } from "../utils/Stylehelper";

const LocationHeader = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="location" size={25} />
      <View style={styles.dashedLine}></View>
      <Ionicons name="menu" size={25} />
    </View>
  );
};

export default LocationHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    height: getHeight(32),
    width: "100%",
    marginTop: getHeight(10),
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "black",
    width: getWidth(298),
    marginVertical: getHeight(4),
  },
});
