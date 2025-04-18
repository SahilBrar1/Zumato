import { View, FlatList, Text, StyleSheet, TextInput } from "react-native";
import React, { memo, useEffect, useState } from "react";
import ItemComponent from "./ItemComponent";
import { useQuery } from "@tanstack/react-query";
import { fetchRestaurants } from "../apis/api";
import LottieView from "lottie-react-native";
import Header from "./LocationHeader";
import CategoryList from "./CategoryList";

const MainHeader = ({ searchText, setSearchText }: any) => (
  <>
    <Header searchText={searchText} setSearchText={setSearchText} />
    <CategoryList />
  </>
);

const FlatlistComponent = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {
    data: allData,
    isLoading,
    isError,
    fetchStatus,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: fetchRestaurants,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (allData) {
      if (searchText.trim() === "") setFilteredData(allData);
      else {
        const formattedQuery = searchText.toLowerCase();
        const filtered = allData.filter((item: any) =>
          item.name.toLowerCase().includes(formattedQuery)
        );
        setFilteredData(filtered);
      }
    }
  }, [allData, searchText]);
  console.log("FlatlistComponent rendered again");

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
      <FlatList
        data={filteredData}
        ListHeaderComponent={
          <MainHeader searchText={searchText} setSearchText={setSearchText} />
        }
        stickyHeaderIndices={[0]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemComponent restaurant={item} />}
        initialNumToRender={1}
        maxToRenderPerBatch={3}
        windowSize={2}

        // removeClippedSubviews={true}
        // onEndReached={fetchNextPage}
        // onEndReachedThreshold={0.5}
        // ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
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
