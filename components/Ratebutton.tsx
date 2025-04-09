import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Ratebutton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.rate}>
        {" "}
        <Text>
          4.1 <Ionicons name="star" color={"yellow"} />
        </Text>{" "}
      </TouchableOpacity>
    </View>
  );
};

export default Ratebutton;
const styles = StyleSheet.create({
  rate: {
    backgroundColor: "green",
    fontWeight: "bold",
    alignSelf: "flex-end",
    alignItems: "center",
    marginRight: 20,
    width: 50,
    height: 20,
    borderRadius: 5,
  },
});
