import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import ItemComponent from "./ItemComponent";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../apis/api";

const FlatlistComponent = () => {
  //useQuery
  const { data, isLoading, isError, fetchStatus } = useQuery({
    queryKey: ["hotels"],
    queryFn: fetchPosts,
    staleTime: Infinity,
  });
  //useQuery

  //useState
  const [name, setName] = useState("");
  //useState

  if (isLoading) {
    return <Text style={styles.text}>Loading....</Text>;
  }
  if (isError) {
    return <Text style={styles.text}>Error fetching data!</Text>;
  }

  if (fetchStatus === "fetching") {
    return <Text style={styles.text}> fetching data for query</Text>;
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Restro here"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemComponent name={item.name}/>}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
        // onEndReached={fetchNextPage}
        onEndReachedThreshold={0.5}
        // ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

export default FlatlistComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 60,
    textAlign: "center",
    marginTop: 10,
  },
  input: {
    borderRadius:5,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
