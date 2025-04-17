import React from "react";
import { useNetInfo } from "../components/NetInfoContext";
import { Image, StyleSheet, Text, View } from "react-native";
import HotelList from "../components/HotelList";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import { getWidth } from "../utils/Stylehelper";
import Recommendation from "../components/Recommendation";

const HomeScreen = ({ navigation }: any) => {
  const { isConnected } = useNetInfo();
  console.log("I am HomeScreen AND I rendered again");

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {/* <Header title="Home" />
       */}
      {!isConnected && (
        <Text
          style={{
            textAlign: "center",
            fontSize: 8,
            marginTop: 5,
            color: "red",
          }}
        >
          No Internet Connection
        </Text>
      )}
      <TopBar />
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/discZumato.png")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/discZumato.png")}
        />
      </View>

      {/* <Recommendation /> */}
      <HotelList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: getWidth(160),
    height: getWidth(110),
  },
});
