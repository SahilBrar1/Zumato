import { TextInput, StyleSheet, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { getHeight, getWidth } from "../utils/Stylehelper";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const SearchBar = ({ searchText, setSearchText }: any) => {
  return (
    <View style={[styles.searchRow]}>
      {/* { transform: [{ translateY }] } actually this property should be inside animated.view with searchRow style*/}
      <Ionicons
        name="search"
        size={18}
        color="#999"
        style={{ marginHorizontal: 8 }}
      />
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search restaurants, cuisines..."
        style={styles.searchInput}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  searchRow: {
    alignSelf: "center",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: getHeight(8),
    // marginTop: getHeight(8),
    // paddingVertical: 8,
    height: getHeight(40),
    width: width - 32,
  },
  input: {
    marginVertical: getHeight(10),
    height: getHeight(43),
    marginTop: getHeight(16),
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
  },
});
