import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import DishItem from "./DishItemComponent";

type DishItem = {
  fullItem: {
    title: string;
    price: number;
  };
};

const DishesList = () => {
  const data = [
    { title: "Margherita Pizza", price: 9.99 },
    { title: "Spaghetti Carbonara", price: 12.49 },
    { title: "Grilled Chicken Caesar Salad", price: 10.99 },
    { title: "Beef Tacos", price: 8.75 },
    { title: "Sushi Platter", price: 14.5 },
    { title: "Butter Chicken with Naan", price: 11.25 },
    { title: "Veggie Burger", price: 9.0 },
    { title: "Shrimp Pad Thai", price: 13.3 },
    { title: "BBQ Ribs", price: 15.95 },
    { title: "Fish and Chips", price: 10.5 },
    { title: "Mushroom Risotto", price: 11.99 },
    { title: "Grilled Salmon", price: 16.2 },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <DishItem fullItem={item} />}
      initialNumToRender={2}
      maxToRenderPerBatch={3}
      windowSize={3}
      // removeClippedSubviews={true}
      // onEndReached={fetchNextPage}
      onEndReachedThreshold={0.5}
      // ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
    />
  );
};
export default DishesList;

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
  },
});
