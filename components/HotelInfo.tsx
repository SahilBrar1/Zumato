import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Ratebutton from "./Ratebutton";

const CartView = () => {
  return (
    <View style={style.container}>
      <View style={style.flex}>
        <Text style={style.maintext}>Italian pizza</Text>
        <Ratebutton />
      </View>
      <View style={style.distance}>
        <Ionicons style={style.icon} name="location" />
        <Text style={style.font}>1km . Ambala Locality</Text>
      </View>
      <View style={style.distance}>
        <Ionicons style={style.icon} name="time" />
        <Text style={style.font}>10-15 minutes . schedule fot later</Text>
      </View>
      <ScrollView horizontal={true} style={style.scrollcontainer}>
        <Text style={style.textop}>frequently reordered</Text>
        <Text style={style.textop}>Loved by the Delivery partners</Text>
        <Text style={style.textop}>payment online and get many offers</Text>
      </ScrollView>
    </View>
  );
};

export default CartView;
const style = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  scrollcontainer: {
    display: "flex",
    flexDirection: "row",
    margin: 1,
    padding: 5,
  },
  pureveg: {
    backgroundColor: "#fadbd8",
    color: "green",
    alignSelf: "flex-start",
    padding: 3,
    borderRadius: 8,
    marginTop: 2,
    marginLeft: 8,
  },
  maintext: {
    fontSize: 40,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    // margin: 7,
  },
  distance: {
    display: "flex",
    flexDirection: "row",
    margin: 1,
  },
  btn: {
    borderColor: "whitess ",
    borderWidth: 3,
    alignSelf: "center",
    justifyContent: "space-between",
    margin: 10,
    width: 180,
    backgroundColor: "#d9dcd4 ",
    borderRadius: 50,
    elevation: 1,
    height: 30,
    alignItems: "center",
  },
  textop: {
    fontSize: 12,
    alignSelf: "center",
    padding: 8,
    margin: 5,
    backgroundColor: "#eaecee",
    color: "black",
    borderRadius: 20,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    padding: 10,
  },
  font: {
    fontWeight: "bold",
    padding: 1,
    color: "grey",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  icon: {
    alignSelf: "center",
    color: "grey",
  },
});
