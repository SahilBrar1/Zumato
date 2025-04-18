import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";

interface Category {
  id: string;
  name: string;
  img: any;
}

const categories: Category[] = [
  { id: "1", name: "Healthy", img: require("../assets/discZumato.png") },
  { id: "2", name: "Home Style", img: require("../assets/pizzaimg.jpg") },
  { id: "3", name: "Pizza", img: require("../assets/zomato.jpg") },
  { id: "4", name: "Chicken", img: require("../assets/logo.png") },
];

const ITEM_SIZE = 80;

const CategoryList: React.FC = ({}) => {
  // const pos = scrollY.interpolate({
  //   inputRange: [0, scrollDistance],
  //   outputRange: ["", "fixed"],
  //   extrapolate: "clamp",
  // });

  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Eat what makes you happy</Text> */}
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image source={item.img} style={styles.image} />
            <Text style={styles.label}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#fff", elevation: 3 },
  heading: {
    fontSize: 18,
    // fontWeight: "bold",
    fontFamily: "sans-serif",
    fontStyle: "italic",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  item: { width: ITEM_SIZE, alignItems: "center", marginRight: 12 },
  image: { width: ITEM_SIZE, height: ITEM_SIZE, borderRadius: ITEM_SIZE / 2 },
  label: { marginTop: 4, fontSize: 12, textAlign: "center" },
});

export default CategoryList;
