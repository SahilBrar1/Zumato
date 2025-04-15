import { View, FlatList, Text, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import ItemComponent from "./ItemComponent";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../apis/api";
import LottieView from "lottie-react-native";
import colors from "../tokens/colors";

const FlatlistComponent = () => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  //useQuery
  const {
    data: allData,
    isLoading,
    isError,
    fetchStatus,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: fetchPosts,
    staleTime: Infinity,
  });
  //useQuery

  useEffect(() => {
    if (allData) {
      if (query.trim() === "") {
        setFilteredData(allData);
      } else {
        const formattedQuery = query.toLowerCase();
        const filteredData = allData.filter((item: any) =>
          item.name.toLowerCase().includes(formattedQuery)
        );
        setFilteredData(filteredData);
      }
    }
  }, [allData, query]);
  //useEffect

  if (isLoading) {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#eee",
          }}
          source={require("../assets/Animation.json")}
        />
      </View>
    );
  }
  if (isError) {
    return <Text style={styles.text}>Error fetching data!</Text>;
  }

  if (fetchStatus === "fetching") {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          style={{
            width: 20,
            height: 20,
            backgroundColor: "#eee",
          }}
          source={require("../assets/Animation.json")}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={(queryText) => setQuery(queryText)}
        placeholder="Search"
        style={styles.input}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemComponent name={item.name} />}
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
    backgroundColor: colors.backgroundBlueExtraLight,
  },
  text: {
    fontSize: 60,
    textAlign: "center",
    marginTop: 10,
  },
  input: {
    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    marginBottom: 10,
  },
  animationContainer: {
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
