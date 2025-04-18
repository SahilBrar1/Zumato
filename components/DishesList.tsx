import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import DishItem from "./DishItemComponent";

const DishesList = () => {
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
    { title: "eleven Item" },
    { title: "Third Item" },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <DishItem title={item.title} />}
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
