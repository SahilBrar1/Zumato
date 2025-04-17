import { View, FlatList, Text, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import ItemComponent from "./ItemComponent";
import { useQuery } from "@tanstack/react-query";
import { fetchRestaurants } from "../apis/api";
import LottieView from "lottie-react-native";

const FlatlistComponent = () => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const { data: allData, isLoading, isError, fetchStatus } = useQuery({
    queryKey: ["hotels"],
    queryFn: fetchRestaurants,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (allData) {
      if (query.trim() === "") setFilteredData(allData);
      else {
        const formattedQuery = query.toLowerCase();
        const filtered = allData.filter((item: any) =>
          item.name.toLowerCase().includes(formattedQuery)
        );
        setFilteredData(filtered);
      }
    }
  }, [allData, query]);

  if (isLoading || fetchStatus === "fetching") {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          style={{ width: 50, height: 50 }}
          source={require("../assets/Animation.json")}
        />
      </View>
    );
  }

  if (isError) return <Text style={styles.text}>Error fetching data!</Text>;

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search"
        style={styles.input}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemComponent restaurant={item} />}
      />
    </View>
  );
};

export default FlatlistComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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