import React, { useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  Animated,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Header: React.FC = () => {
  return (
    <View style={[styles.container, { height: 60 }]}>
      <View style={[styles.topRow]}>
        <Ionicons name="location-outline" size={20} color="#fff" />
        <Text style={styles.locationText}>Logicease, Ambala</Text>
        <TouchableOpacity style={styles.profileBtn}>
          <Image source={require("../assets/logo.png")} style={styles.avatar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight || 0,
    // position: "absolute",

    width: "100%",
    backgroundColor: "#d62e00",
    paddingHorizontal: 16,
    // paddingBottom: 8,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 16,
  },
  locationText: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    marginLeft: 4,
  },
  profileBtn: {
    padding: 2,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
});

export default Header;
