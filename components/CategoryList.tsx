import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

interface Category {
  id: string;
  name: string;
  img: any;
}
interface CategoryListProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

const categories: Category[] = [
  { id: "1", name: "All", img: require("../assets/cat_all.webp") },
  { id: "2", name: "Specials", img: require("../assets/cat_specials.webp") },
  { id: "3", name: "Chicken", img: require("../assets/cat_chicken.jpg") },
  { id: "4", name: "Burger", img: require("../assets/cat_burger2.png") },
  { id: "5", name: "Paneer", img: require("../assets/cat_pizza.png") },
  { id: "6", name: "Cake", img: require("../assets/cat_cake.jpg") },
  { id: "7", name: "Fries", img: require("../assets/cat_fries.jpg") },
  { id: "8", name: "Milkshake", img: require("../assets/cat_milkshake.png") },
  { id: "9", name: "Desserts", img: require("../assets/cat_desserts.png") },
  { id: "10", name: "Cupcake", img: require("../assets/cat_cupcake.jpeg") },
  { id: "11", name: "Brownie", img: require("../assets/cat_brownie.webp") },
  { id: "12", name: "Sundae", img: require("../assets/cat_Sundae.webp") },
  { id: "13", name: "Muffin", img: require("../assets/cat_Muffin.png") },
  { id: "14", name: "Ice Cream", img: require("../assets/cat_icecream.png") },
];

const ITEM_SIZE = 60;

interface Props {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  selectedCategory,
  onCategorySelect,
}) => {
  const flatListRef = useRef<FlatList>(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        getItemLayout={(data, index) => ({
          length: ITEM_SIZE + 12, // item size + marginRight
          offset: (ITEM_SIZE + 12) * index,
          index,
        })}
        renderItem={({ item, index }) => {
          const isSelected = item.name === selectedCategory;
          return (
            <TouchableOpacity
              style={[
                styles.item,
                isSelected && {
                  borderBottomWidth: 2,
                  borderBottomColor: "red",
                },
              ]}
              onPress={() => {
                setSelectedCategoryIndex(index);
                flatListRef.current?.scrollToIndex({
                  index,
                  animated: true,
                  viewPosition: 0.5,
                });
                onCategorySelect(item.name);
              }}
            >
              <Image source={item.img} style={styles.image} />
              <Text
                style={[
                  styles.label,
                  isSelected && { color: "red", fontWeight: "bold" },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
    paddingVertical: 8,
    backgroundColor: "#fff",
    elevation: 3,
  },
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
