import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import { getHeight, getWidth } from "../utils/Stylehelper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import colors from "../tokens/colors";

const DetailHeader = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  console.log("I am DetailHeader AND I rendered again");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.text}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailHeader;
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "space-between",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  cartButton: {
    marginRight: 10,
    backgroundColor: colors.btnBackground,
    height: getHeight(35),
    width: getWidth(85),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
});

// shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     shadowOffset: { width: 0, height: 2 },
//     justifyContent: "space-between",
