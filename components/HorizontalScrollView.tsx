import { Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

const HorizontalScrollView = () => {
  return (
    <ScrollView horizontal={true} style={styles.scrollcontainer}>
      <Text style={styles.textop}>frequently reordered</Text>
      <Text style={styles.textop}>Loved by the Delivery partners</Text>
      <Text style={styles.textop}>payment online and get many offers</Text>
    </ScrollView>
  );
};

export default HorizontalScrollView;

const styles = StyleSheet.create({
  scrollcontainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    margin: 1,
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  textop: {
    fontSize: 12,
    color: "#000",
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 20,
  },
});
