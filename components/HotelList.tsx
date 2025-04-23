import { View, FlatList, Text, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import ItemComponent from "./ItemComponent";
import { useQuery } from "@tanstack/react-query";
import { fetchRestaurants } from "../apis/api";
import LottieView from "lottie-react-native";
import Header from "./LocationHeader";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";

const FlatlistComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const mainData = useMemo(() => {
    if (!allData) return [null];

    const formattedQuery = searchText.toLowerCase();

    const filtered = allData.filter((item: any) => {
      const matchesSearch = item.name.toLowerCase().includes(formattedQuery);
      const matchesCategory =
        selectedCategory === "All" ||
        item.category?.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });

    return [null, ...filtered];
  }, [searchText, selectedCategory, allData]);

  const handleCategoryChange = useCallback((category: any) => {
    setSelectedCategory(category);
  }, []);

  // console.log("FlatlistComponent rendered again");

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

  const renderItem = ({ item, index }: { item: any | null; index: number }) => {
    if (index === 0) {
      return (
        <View style={{ backgroundColor: "#d62e00" }}>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <CategoryList
            onCategorySelect={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
        </View>
      );
    }
    return item ? <ItemComponent restaurant={item} /> : null;
  };

  const mainHeader = () => <Header />;

  return (
    <View style={styles.container}>
      <FlatList
        // contentContainerStyle={{paddingTop: 180}}

        data={mainData}
        ListHeaderComponent={mainHeader}
        stickyHeaderIndices={[1]}
        keyExtractor={(item, index) =>
          item?.id ? item.id.toString() : `null-${index}`
        }
        renderItem={renderItem}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        windowSize={3}
        removeClippedSubviews={true}

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
