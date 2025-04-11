import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Cart = () => {
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

      <View style={styles.itemBox}>
        <View style={styles.itemRow}>
          <Text style={styles.boldText}>Chicken With 4 Roti</Text>
          <Text style={styles.qtyBox}>- 1 +</Text>
        </View>
        <Text>Edit</Text>
      </View>

      <View style={styles.itemBox}>
        <View style={styles.itemRow}>
          <Text style={styles.boldText}>Butter Chicken</Text>
          <Text style={styles.qtyBox}>- 2 +</Text>
        </View>
        <Text>Edit</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.addMore}>+ Add more items</Text>
      </TouchableOpacity>

      <View style={styles.dashedLine}></View>

      <View style={styles.noteBox}>
        <Ionicons name="document" />
        <Text style={{ marginLeft: 5 }}>Add a note for the restaurant</Text>
      </View>

      <View style={styles.paymentSection}>
        <Text style={styles.paymentText}>Pay Using</Text>
        <TouchableOpacity style={styles.paymentBtn}>
          <Text style={{ color: "white" }}>Change payment method</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fdfefe",
    height: "100%",
  },
  offerBanner: {
    backgroundColor: "#d6eaf8",
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  offerText: {
    color: "blue",
    fontWeight: "bold",
  },
  goldBox: {
    backgroundColor: "#fef5e7",
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
    marginTop: "auto",
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
});
