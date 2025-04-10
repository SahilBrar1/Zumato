import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import DishItem from "./DishItemComponent";

const ViewCart3 = () => {
  const data = [
    { title: "First Item" },
    { title: "Second Item" },
    { title: "Third Item" },
    { title: "forth Item" },
    { title: "fifth Item" },
    { title: "sixth Item" },
    { title: "seventh Item" },
    { title: "eight Item" },
    { title: " nine Item" },
    { title: "ten Item" },
    { title: "Second Item" },
    { title: "Third Item" },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <DishItem title={item.title} />}
    />
  );
};
export default ViewCart3;
const style = StyleSheet.create({
  flat: {
    borderWidth: 5,
  },
});
