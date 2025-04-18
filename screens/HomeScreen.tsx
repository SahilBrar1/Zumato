// import React from "react";
// import { useNetInfo } from "../components/NetInfoContext";
// import { Image, StyleSheet, Text, View } from "react-native";
// import HotelList from "../components/HotelList";
// import Header from "../components/Header";
// import TopBar from "../components/TopBar";
// import { getWidth } from "../utils/Stylehelper";
// import Recommendation from "../components/Recommendation";

// const HomeScreen = ({ navigation }: any) => {
//   const { isConnected } = useNetInfo();
//   console.log("I am HomeScreen AND I rendered again");

//   return (
//     <View style={{ backgroundColor: "white", flex: 1 }}>
//       {/* <Header title="Home" />
//        */}
//       {!isConnected && (
//         <Text
//           style={{
//             textAlign: "center",
//             fontSize: 8,
//             marginTop: 5,
//             color: "red",
//           }}
//         >
//           No Internet Connection
//         </Text>
//       )}
//       <TopBar />
//       <View style={styles.container}>
//         <Image
//           style={styles.logo}
//           source={require("../assets/discZumato.png")}
//         />
//         <Image
//           style={styles.logo}
//           source={require("../assets/discZumato.png")}
//         />
//       </View>

//       {/* <Recommendation /> */}
//       <HotelList />
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//     backgroundColor: "white",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   logo: {
//     width: getWidth(160),
//     height: getWidth(110),
//   },
// });


// src/screens/HomeScreen.tsx
import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  StatusBar,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const { width } = Dimensions.get('window');
const MAX_HEADER_HEIGHT = 180;
const MIN_HEADER_HEIGHT = 60;
const SCROLL_DISTANCE = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  // interpolate header height
  const headerHeight = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  // interpolate opacity for title/banner
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE / 2, SCROLL_DISTANCE],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Animated.Text style={[styles.title, { opacity: headerOpacity }]}>
          Home – Karol Bagh, New Delhi
        </Animated.Text>
        {/* यहाँ पर आप अपना Banner Image या कोई और content रख सकते हैं */}
        <Animated.Image
          source={require('../assets/discZumato.png')}
          style={[styles.banner, { opacity: headerOpacity }]}
          resizeMode="cover"
        />
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        // nativeEvent के scrollY को update करें
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* आपका बाकी UI: “Eat what makes you happy”, restaurant list, आदि */}
        <View style={{ height: 1000, backgroundColor: '#f5f5f5' }}>
          <Text>…आपका कंटेंट…</Text>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#d62e00', // Zomato रेड
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  banner: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: MAX_HEADER_HEIGHT,
  },
  scrollContent: {
    paddingTop: MAX_HEADER_HEIGHT,
  },
});



{/* <SafeAreaView>
  <Header scrollY={scrollY}/>
  <Animated.ScrollView …>
    <CategoryList/>
    <RestaurantList/>
  </Animated.ScrollView>
</SafeAreaView> */}