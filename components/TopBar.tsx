import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { getHeight } from "../utils/Stylehelper";
import SearchBar from "./SearchBar";
import LocationHeader from "./LocationHeader";
import HorizontalScrollView from "./HorizontalScrollView";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <LocationHeader />
      <SearchBar />
      <HorizontalScrollView />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    height: getHeight(175),
    padding: getHeight(10),
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
    // backgroundColor: "white",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
});
