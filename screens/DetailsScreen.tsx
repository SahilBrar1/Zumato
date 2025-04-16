import React from "react";
import { View } from "react-native";
import HotelInfo from "../components/HotelInfo";
import DishFilters from "../components/DishFilters";
import DishesList from "../components/DishesList";
import { getHeight } from "../utils/Stylehelper";

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      
      <HotelInfo />
      {/* <DishFilters /> */}
      <DishesList />
    </View>
  );
};

export default DetailsScreen;

const styles = {
  container: {
    // padding: getHeight(15),
  },
};
