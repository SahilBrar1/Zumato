import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Ratebutton from "./Ratebutton";
import { useNavigation } from "@react-navigation/native";
import { getHeight, getWidth } from "../utils/Stylehelper";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListRoute } from "../navigationTypes";

interface AppButtonProps {
  name: string;
  photo: string;
  deliveryTime: string;
  distance: string;
}

const AppButton = ({ name, photo, deliveryTime, distance }: AppButtonProps) => {
  const navigation = useNavigation<StackNavigationProp<ParamListRoute>>();
  // console.log("I am AppButton AND I rendered again");

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.appButtonContainer}
      onPress={() =>
        navigation.navigate("Details", {
          restaurant: {
            name,
            deliveryTime,
            distance,
          },
        })
      }
    >
      <Image style={styles.img} source={{ uri: photo }} />
      <View style={styles.padding}>
        <View style={styles.time}>
          <Ionicons name="time" />
          <Text>{deliveryTime} min</Text>
          <Text style={{ marginLeft: 4 }}>{distance} km</Text>
        </View>
        <View style={styles.textflex}>
          <Text numberOfLines={1} style={styles.appButtonText}>
            {name}
          </Text>
          <Ratebutton />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "white",
    fontFamily: "Georgia, serif",
    height: getHeight(290),
    shadowOpacity: 1,
    borderRadius: 12,
    shadowRadius: 6,
    position: "static",
    textShadowColor: "black",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
  },
  appButtonText: {
    fontSize: 24,
    // height: getHeight(23),
    width: getWidth(236),
    color: "black",
    fontWeight: "bold",
    margin: 1,
    fontFamily: "Nunito",
  },
  img: {
    height: getHeight(200),
    width: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  time: {
    display: "flex",
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
  },
  dot: {
    fontWeight: "bold",
  },
  textflex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  padding: {
    padding: 7,
  },
  margin: {
    paddingBottom: 9,
    paddingLeft: 2,
  },
});
