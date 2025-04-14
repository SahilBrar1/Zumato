import { View, FlatList, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import ItemComponent from "./ItemComponent";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../apis/api";
import LottieView from "lottie-react-native";
import colors from "../tokens/colors";

const FlatlistComponent = () => {
  //useQuery
  const { data, isLoading, isError, fetchStatus } = useQuery({
    queryKey: ["hotels"],
    queryFn: fetchPosts,
    staleTime: Infinity,
  });
  //useQuery

  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState(data);

  //useState
  const [name, setName] = useState("");
  //useState

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
  //handleSearch
  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const contains = ({ name, email }, query) => {
    const { first, last } = name;

    if (
      first.includes(query) ||
      last.includes(query) ||
      email.includes(query)
    ) {
      return true;
    }

    return false;
  };
  //handleSearch
  //renderHeader
  function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}
        />
      </View>
    );
  }
  //renderHeader
  return (
    <View style={styles.container}>
      {/* <TextInput
        placeholder="Search Restaurant name and dishes here..."
        value={name}
        onChangeText={setName}
        style={styles.input}
      /> */}
      <FlatList
        ListHeaderComponent={renderHeader}
        data={data}
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
