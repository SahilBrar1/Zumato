import React from "react";
import { useNetInfo } from "../components/NetInfoContext";
import { Text } from "react-native";
import HotelList from "../components/HotelList";
import Header from "../components/Header";

const HomeScreen = ({ navigation }: any) => {
  const { isConnected } = useNetInfo();
  return (
    <>
      <Header title="Home" />
      <HotelList />
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
    </>
  );
};

export default HomeScreen;
