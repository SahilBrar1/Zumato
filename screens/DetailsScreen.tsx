import React from "react";
import { View, Text } from "react-native";
import HotelInfo from "../components/HotelInfo";
import DishFilters from "../components/DishFilters";
import DishesList from "../components/DishesList";

const DetailsScreen = () => {
  return (
    <View>
      <HotelInfo />
      <DishFilters />
      <DishesList />
    </View>
  );
};

export default DetailsScreen;
