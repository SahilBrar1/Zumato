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
import Ionicons from "@expo/vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import colors from "../tokens/colors";

const DetailHeader = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  console.log("I am DetailHeader AND I rendered again");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.firstView}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="grey" />
          </TouchableOpacity>
          <Image style={styles.logo} source={require("../assets/zo.png")} />
        </View>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <Ionicons style={styles.text} name="cart" />

          {/* <Text style={styles.text}>View Cart</Text> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailHeader;
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    // paddingTop: StatusBar.currentHeight,
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
    width: getWidth(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 22,
  },
  backButton: {
    width: 24,
  },
  firstView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

// shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     shadowOffset: { width: 0, height: 2 },
//     justifyContent: "space-between",
