import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCart } from "./CartContext";
import CartListComponent from "./CartListComponent";
import { getHeight } from "../utils/Stylehelper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import colors from "../tokens/colors";

const AddCart = () => {
  const { cart } = useCart();
  const navigation = useNavigation<StackNavigationProp<any>>();

  const baseTotal = cart.reduce(
    (acc: number, item: { price: number; quantity: number }) =>
      acc + (item.price ?? 0) * item.quantity,
    0
  );

  const isAboveHundred = baseTotal > 100;
  const discount = isAboveHundred ? 33 : 0;
  const [goldAdded, setGoldAdded] = useState(false);

  const finalPrice = baseTotal - discount + (goldAdded ? 300 : 0);

  return (
    <View style={styles.container}>
      {isAboveHundred && (
        <View style={styles.offerBanner}>
          <Text style={styles.offerText}>You saved ₹33 on this order</Text>
        </View>
      )}

      <View style={styles.goldBox}>
        <View>
          <Text style={styles.boldText}>Get Gold for 3 months</Text>
          <Text>Unlimited free deliveries & more benefits</Text>
          <Text style={styles.learnMore}>Learn more</Text>
        </View>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => setGoldAdded(!goldAdded)}
        >
          <Text style={{ color: "red" }}>{goldAdded ? "Remove" : "ADD"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        <FlatList
          data={cart}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          renderItem={({ item }) => (
            <CartListComponent
              title={item.title}
              quantity={item.quantity}
              price={item.price}
            />
          )}
        />
      </View>
      {/* onPress={() => navigation.navigate("Details")} */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.addMore}>+ Add more items</Text>
      </TouchableOpacity>

      <View style={styles.dashedLine} />

      <View style={styles.noteBox}>
        <Ionicons name="cart" />
        <Text style={{ marginLeft: 5 }}>Total Price: ₹{finalPrice}</Text>
      </View>

      <View style={styles.offerbanner2}>
        <Text style={styles.offerText}>
          Save Extra By Applying Coupons on Every Order
        </Text>
      </View>

      <View>
        <TouchableOpacity style={styles.paymentBtn}>
          <Text style={{ color: "white" }}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCart;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: colors.backgroundBlueExtraLight,
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
    // marginBottom: 15,
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
  list: {
    height: getHeight(250),
    width: "100%",
    // backgroundColor: "#fff",
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
});
