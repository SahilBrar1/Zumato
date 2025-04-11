import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getHeight } from "../utils/Stylehelper";


type ItemProp = {
  title: string;
}
const DishItemComponent = ({title} : ItemProp) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={style.viewcontiner}>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={style.touch}>
        <View style={style.firstView}>
          <Text style={style.bestSeller}>Best Seller</Text>
          
          <Text style={style.titleText}>{title}</Text>

          <View style={style.starflex}>
            <Ionicons name="star" size={16} color={"gold"} />
            <Ionicons name="star" size={16} color={"gold"} />
            <Ionicons name="star" size={16} color={"gold"} />
            <Ionicons name="star" size={16} color={"gold"} />
            <Ionicons name="star-outline" size={16} />
            <Text> (320)</Text>
          </View>

          <Text style={style.priceText}>Rs. 69.50</Text>
          <Text style={style.discountText}>50% Off</Text>
          <Text style={style.descText}>Gently Cooked</Text>
        </View>

        <View style={style.secondView}>
          <Image
            style={style.img}
            source={require("../assets/pizzaimg.jpg")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DishItemComponent;


const style = StyleSheet.create({
  viewcontiner: {
    // borderWidth: 1,
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  touch: {
    flexDirection: "row",
    padding: 10,
  },
  firstView: {
    flex: 3/2,
    justifyContent: "space-between",
    // paddingRight: 7,
    // borderWidth: 2,
  },
  secondView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: getHeight(120),
    width: getHeight(120),
    borderRadius: 10,
  },
  starflex: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  bestSeller: {
    color: "green",
    fontWeight: "bold",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 4,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 2,
  },
  discountText: {
    color: "red",
    fontWeight: "bold",
  },  
  descText: {
    color: "gray",
    marginTop: 2,
  },
});
