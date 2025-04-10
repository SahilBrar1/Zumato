import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import Ionicons from "@expo/vector-icons/Ionicons";
type ItemProps = {
  title: string;
};
const List = ({ title }: ItemProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View style={style.viewcontiner}>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <View style={style.firstView}>
          <Text>best Seller</Text>
          <Text style={style.textt}>Rajma chawal[500ml, 1 Box Serves 1]</Text>
          {/* <View style={style.starflex}>
            <Ionicons name="star" color={"yellow"} />
            <Ionicons name="star" color={"yellow"} />
            <Ionicons name="star" color={"yellow"} />
            <Ionicons name="star" color={"yellow"} />
            <Ionicons name="star" />
            <Text> (320)</Text>
          </View> */}
          <Text>Rs. 69.50</Text>
          <Text>Rs. 69.50</Text>
          <Text>50% Off</Text>
          <Text>Gently</Text>
        </View>
        <View style={style.secondView}>
          <Image style={style.img} source={require("../assets/pizzaimg.jpg")} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default List;
const style = StyleSheet.create({
  viewcontiner: {
    borderWidth: 1,
    height: 280,
    margin: 5,
    padding: 8,
    display: "flex",
    flexDirection: "row",
  },
  firstView: {
    borderWidth: 1,
  },
  secondView: {
    borderWidth: 1,
  },
  img: {
    height: 100,
    width: 100,
    overflow: "hidden",
    alignSelf: "flex-end",
  },
  starflex: {
    display: "flex",
    flexDirection: "row",
  },
  textt: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

{
  /* <Image
              style={style.img}
              source={require("../assets/pizzaimg.jpg")}
            /> */
}
