import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { getHeight, getWidth } from "../utils/Stylehelper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const DetailHeader = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={styles.cartText}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailHeader;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: getWidth(15),
    paddingVertical: getHeight(10),
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  logo: {
    width: getWidth(30),
    height: getHeight(30),
    resizeMode: "contain",
  },
  cartButton: {
    marginLeft: getWidth(180),
    backgroundColor: "red",
    paddingHorizontal: getWidth(15),
    paddingVertical: getHeight(5),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cartText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
