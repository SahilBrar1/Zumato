import React from "react";
import { View } from "react-native";
import HotelInfo from "../components/HotelInfo";
import DishFilters from "../components/DishFilters";
import DishesList from "../components/DishesList";
import { getHeight } from "../utils/Stylehelper";
import DetailHeader from "../components/DetailHeader";

const DetailsScreen = (name: string) => {
  return (
    <View style={{ height: "100%" }}>
      <DetailHeader />
      <HotelInfo />
      {/* <DishFilters /> */}
      <DishesList />
    </View>
  );
};

export default DetailsScreen;
