import { View, FlatList, Text, StyleSheet, TextInput, Animated } from "react-native";
import React, { memo, useEffect, useRef, useState } from "react";
import ItemComponent from "./ItemComponent";
import { useQuery } from "@tanstack/react-query";
import { fetchRestaurants } from "../apis/api";
import LottieView from "lottie-react-native";
import Header from "./LocationHeader";
import CategoryList from "./CategoryList";

const FlatlistComponent = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const scrollY = useRef(new Animated.Value(0)).current;

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
      const formattedQuery = searchText.toLowerCase();
  
      const filtered = allData.filter((item: any) => {
        const matchesSearch = item.name.toLowerCase().includes(formattedQuery);
        const matchesCategory =
          selectedCategory === "All" ||
          item.category?.toLowerCase() === selectedCategory.toLowerCase();
  
        return matchesSearch && matchesCategory;
      });
  
      setFilteredData(filtered);
    }
  }, [allData, searchText, selectedCategory]);
  
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
      <View>
            <Header searchText={searchText} setSearchText={setSearchText} scrollY={scrollY}/>
      </View>
      <Animated.FlatList
        // contentContainerStyle={{paddingTop: 180}}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
        data={filteredData}
        ListHeaderComponent={() => [
          // <View key="header">
          //   <Header searchText={searchText} setSearchText={setSearchText} scrollY={scrollY}/>
          // </View>,
          <View key="category">
            <CategoryList onCategorySelect={(category) => setSelectedCategory(category)}
  selectedCategory={selectedCategory}
            />
          </View>,
        ]}
        
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


// import {
//   View,
//   Animated,
//   StyleSheet,
//   Text,
//   StatusBar,
// } from "react-native";
// import React, { useEffect, useRef, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchRestaurants } from "../apis/api";
// import LottieView from "lottie-react-native";
// import Header from "./LocationHeader";
// import CategoryList from "./CategoryList";
// import ItemComponent from "./ItemComponent";

// const HEADER_MAX_HEIGHT = 120;
// const HEADER_MIN_HEIGHT = 60;
// const CATEGORY_HEIGHT = 60;

// const FlatlistComponent = () => {
//   const scrollY = useRef(new Animated.Value(0)).current;

//   const [filteredData, setFilteredData] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   const {
//     data: allData,
//     isLoading,
//     isError,
//     fetchStatus,
//   } = useQuery({
//     queryKey: ["hotels"],
//     queryFn: fetchRestaurants,
//     staleTime: Infinity,
//   });

//   useEffect(() => {
//     if (allData) {
//       if (searchText.trim() === "") setFilteredData(allData);
//       else {
//         const formattedQuery = searchText.toLowerCase();
//         const filtered = allData.filter((item: any) =>
//           item.name.toLowerCase().includes(formattedQuery)
//         );
//         setFilteredData(filtered);
//       }
//     }
//   }, [allData, searchText]);

//   const headerHeight = scrollY.interpolate({
//     inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
//     outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
//     extrapolate: "clamp",
//   });

//   const translateCategory = scrollY.interpolate({
//     inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
//     outputRange: [0, 0],
//     extrapolate: "clamp",
//   });

//   if (isLoading || fetchStatus === "fetching") {
//     return (
//       <View style={styles.animationContainer}>
//         <LottieView
//           autoPlay
//           style={{ width: 50, height: 50 }}
//           source={require("../assets/Animation.json")}
//         />
//       </View>
//     );
//   }

//   if (isError) return <Text style={styles.text}>Error fetching data!</Text>;

//   return (
//     <View style={{ flex: 1 }}>
//       <StatusBar backgroundColor="#d62e00" barStyle="light-content" />

//       {/* Animated Header */}
//       <Animated.View style={[styles.header, { height: headerHeight }]}>
//         <Header searchText={searchText} setSearchText={setSearchText} />
//       </Animated.View>

//       {/* Sticky Category List */}
//       <Animated.View
//         style={[styles.categoryContainer, { transform: [{ translateY: translateCategory }] }]}
//       >
//         <CategoryList />
//       </Animated.View>

//       {/* FlatList */}
//       <Animated.FlatList
//         data={filteredData}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <ItemComponent restaurant={item} />}
//         contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT + CATEGORY_HEIGHT }}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//       />
//     </View>
//   );
// };

// export default FlatlistComponent;

// const styles = StyleSheet.create({
//   animationContainer: {
//     backgroundColor: "#eee",
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   text: {
//     fontSize: 60,
//     textAlign: "center",
//     marginTop: 10,
//   },
//   header: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#fff",
//     zIndex: 10,
//     elevation: 5,
//   },
//   categoryContainer: {
//     position: "absolute",
//     top: HEADER_MAX_HEIGHT,
//     left: 0,
//     right: 0,
//     zIndex: 10,
//     backgroundColor: "#fff",
//     elevation: 5,
//   },
// });


