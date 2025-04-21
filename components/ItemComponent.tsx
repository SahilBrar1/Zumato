import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";

import { getWidth } from "../utils/Stylehelper";

type ItemProps = { restaurant: any };

const ItemComponent = ({ restaurant }: ItemProps) => {
  return (
    <View style={styles.screenContainer}>
      <AppButton
        name={restaurant.name}
        photo={restaurant.avatar}
        deliveryTime={restaurant.deliveryTime}
        distance={restaurant.distance}
      />
    </View>
  );
};
const HotelItem = React.memo(ItemComponent);
export default HotelItem;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: getWidth(12),
  },
});
