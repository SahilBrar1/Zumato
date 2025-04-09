import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Ratebutton from "./Ratebutton";

interface AppButtonProps {
  onPress?: () => void;
  name: string;
  color?: string;
}

const AppButton: React.FC<AppButtonProps> = ({ name }) => (
  <TouchableOpacity activeOpacity={0.1} style={[styles.appButtonContainer]}>
    <View></View>

    <View>
      <Image
        style={styles.img}
        source={require("../assets/images/pizzaimg.jpg")}
        resizeMode="cover"
      />
    </View>
    <View style={styles.time}>
      <Ionicons name="time" />
      <Text>23 min </Text>

      <Text> 2.2km</Text>
    </View>
    <View style={styles.textflex}>
      <Text style={styles.appButtonText}>{name}</Text>
      <Ratebutton />
    </View>

    <Text>flat Rs. 150 off above Rs. 299</Text>
  </TouchableOpacity>
);

export default AppButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    height: 280,
    borderWidth: 3,
    borderRadius: "7%",
  },
  appButtonText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  img: {
    height: 200,
    width: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  time: {
    display: "flex",
    flexDirection: "row",
  },
  dot: {
    fontWeight: "bold",
  },
  textflex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
