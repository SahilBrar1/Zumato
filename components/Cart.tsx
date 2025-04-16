import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCart } from "./CartContext";
import CartListComponent from "./CartListComponent";

import { getHeight } from "../utils/Stylehelper";

const AddCart = () => {
  const { cart } = useCart();
  // const cart = [{ title: "First Item" }, { title: "Second Item" }];
  return (
    <View style={styles.container}>
      <View style={styles.offerBanner}>
        <Text style={styles.offerText}> You saved ₹33 on this order</Text>
      </View>
      <View style={styles.goldBox}>
        <View>
          <Text style={styles.boldText}>Get Gold for 3 months</Text>
          <Text>Unlimited free deliveries & more benefits</Text>
          <Text style={styles.learnMore}>Learn more</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={{ color: "red" }}>ADD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <CartListComponent title={item.title} quantity={item.quantity} />
          )}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.addMore}>+ Add more items</Text>
      </TouchableOpacity>
      <View style={styles.dashedLine}></View>
      <View style={styles.noteBox}>
        <Ionicons name="document" />
        <Text style={{ marginLeft: 5 }}>Add a note for the restaurant</Text>
      </View>
      <View style={styles.offerbanner2}>
        <Text style={styles.offerText}>
          {" "}
          Save Extra By Applying Coupons on Every Order
        </Text>
      </View>
      <View>
        <View style={styles.paymentSection}></View>
        <TouchableOpacity style={styles.paymentBtn}>
          <Text style={{ color: "white" }}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AddCart;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: "100%",
  },
  offerBanner: {
    backgroundColor: "#D6EAF8",
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  offerText: {
    color: "blue",
    fontWeight: "bold",
  },
  goldBox: {
    backgroundColor: "#FEF5E7",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  learnMore: {
    color: "red",
    marginTop: 2,
  },
  addBtn: {
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
    borderRadius: 5,
    alignSelf: "center",
  },
  itemBox: {
    marginBottom: 12,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  qtyBox: {
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  addMore: {
    color: "red",
    fontWeight: "bold",
    marginTop: 5,
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "grey",
    marginVertical: 10,
  },
  noteBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    padding: 8,
    borderRadius: 10,
    marginBottom: 20,
  },
  paymentSection: {
    marginTop: 1,
  },
  paymentText: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  paymentBtn: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  offerbanner2: {
    backgroundColor: "#D6EAF8",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  paymentText2: {
    fontWeight: "bold",
    marginBottom: 8,
    color: "blue",
    fontSize: 15,
    margin: 10,
  },
  offerbanner3: {
    backgroundColor: "#D6EAF8",
    borderRadius: 5,
    marginBottom: 10,
    height: 160,
  },
  border: {
    borderWidth: 1,
    padding: 8,
    margin: 10,
    borderRadius: 5,
    height: 40,
    alignSelf: "flex-start",
    width: 100,
    fontWeight: "bold",
    textAlign: "center",
    alignContent: "center",
    marginRight: 250,
  },
  list: {
    height: getHeight(250),
    width: "100%",
  },
});
