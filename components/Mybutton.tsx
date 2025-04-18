// components/Header.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  scrollY: Animated.Value;
  maxHeaderHeight: number;
  minHeaderHeight: number;
  scrollDistance: number;
}

const { width } = Dimensions.get('window');

const Header: React.FC<HeaderProps> = ({ scrollY, maxHeaderHeight, minHeaderHeight, scrollDistance }) => {
  const headerHeight = scrollY.interpolate({
    inputRange: [0, scrollDistance],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: 'clamp',
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, scrollDistance / 2, scrollDistance],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.container, { height: headerHeight }]}>      
      <Animated.View style={[styles.topRow, { opacity }]}>        
        <Ionicons name="location-outline" size={20} color="#fff" />
        <Text style={styles.locationText}>Karol Bagh, New Delhi</Text>
        <TouchableOpacity style={styles.profileBtn}>
          <Image source={require('../assets/avatar.jpg')} style={styles.avatar} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.searchRow, { opacity }]}>        
        <Ionicons name="search" size={18} color="#999" style={{ marginHorizontal: 8 }} />
        <TextInput
          placeholder="Search restaurants, cuisines..."
          style={styles.searchInput}
        />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: '#d62e00',
    paddingHorizontal: 16,
    paddingBottom: 8,
    zIndex: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  locationText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginLeft: 4,
  },
  profileBtn: {
    padding: 4,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 8,
    height: 40,
    width: width - 32,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
});

export default Header;


// components/CategoryList.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';

interface Category {
  id: string;
  name: string;
  img: any;
}

const categories: Category[] = [
  { id: '1', name: 'Healthy', img: require('../assets/cat-healthy.jpg') },
  { id: '2', name: 'Home Style', img: require('../assets/cat-home.jpg') },
  { id: '3', name: 'Pizza', img: require('../assets/cat-pizza.jpg') },
  { id: '4', name: 'Chicken', img: require('../assets/cat-chicken.jpg') },
  // ...add more
];

const ITEM_SIZE = 80;

const CategoryList: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Eat what makes you happy</Text>
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
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

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  heading: { fontSize: 18, fontWeight: 'bold', marginHorizontal: 16, marginBottom: 8 },
  item: { width: ITEM_SIZE, alignItems: 'center', marginRight: 12 },
  image: { width: ITEM_SIZE, height: ITEM_SIZE, borderRadius: ITEM_SIZE / 2 },
  label: { marginTop: 4, fontSize: 12, textAlign: 'center' },
});

export default CategoryList;


// components/RestaurantList.tsx
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RestaurantCard from './RestaurantCard';

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  img: any;
  rating: number;
  time: string;
  promoted?: boolean;
  offer?: string;
}

const restaurants: Restaurant[] = [
  {
    id: 'r1',
    name: 'Sultan Kacchi Biryani',
    cuisine: 'Biryani, Desserts',
    img: require('../assets/biryani.jpg'),
    rating: 4.3,
    time: '25 mins',
    promoted: true,
    offer: '70% OFF',
  },
  {
    id: 'r2',
    name: 'Prem Dhaba',
    cuisine: 'North Indian, Mughlai',
    img: require('../assets/dhaba.jpg'),
    rating: 4.1,
    time: '43 mins',
    offer: '₹75 OFF',
  },
  // ...add more
];

const RestaurantList: React.FC = () => (
  <FlatList
    data={restaurants}
    keyExtractor={item => item.id}
    contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
    renderItem={({ item }) => <RestaurantCard data={item} />}
    ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
  />
);

export default RestaurantList;
