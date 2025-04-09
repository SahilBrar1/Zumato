import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Mybutton = () => {
  return (
    <TouchableOpacity activeOpacity={0.4}>
      <View style={styles.container}>
        <Text style={styles.text}>Continue</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Mybutton;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    borderRadius: 5,
    backgroundColor: "#e23744",
    alignSelf: "center",
    margin: 10,
  },
  text: {
    fontSize: 30,
    padding: 8,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
