import React from "react";
import { useNetInfo } from "../components/NetInfoContext";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import HotelList from "../components/HotelList";
import { getWidth } from "../utils/Stylehelper";

const HomeScreen = () => {
  const { isConnected } = useNetInfo();
  console.log("I am HomeScreen AND I rendered again");

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#d62e00" barStyle="light-content" />
      {!isConnected && (
        <Text
          style={{
            textAlign: "center",
            fontSize: 8,
            marginTop: 5,
            color: "red",
          }}
        >
          No Internet Connection
        </Text>
      )}
      <HotelList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

// src/screens/HomeScreen.tsx
// import React, { useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Animated,
//   StatusBar,
//   Image,
//   Dimensions,
//   SafeAreaView,
// } from 'react-native';

// const { width } = Dimensions.get('window');
// const MAX_HEADER_HEIGHT = 180;
// const MIN_HEADER_HEIGHT = 60;
// const SCROLL_DISTANCE = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

// export default function HomeScreen() {
//   const scrollY = useRef(new Animated.Value(0)).current;

//   // interpolate header height
//   const headerHeight = scrollY.interpolate({
//     inputRange: [0, SCROLL_DISTANCE],
//     outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
//     extrapolate: 'clamp',
//   });

//   // interpolate opacity for title/banner
//   const headerOpacity = scrollY.interpolate({
//     inputRange: [0, SCROLL_DISTANCE / 2, SCROLL_DISTANCE],
//     outputRange: [1, 0.5, 0],
//     extrapolate: 'clamp',
//   });

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" />
//       <Animated.View style={[styles.header, { height: headerHeight }]}>
//         <Animated.Text style={[styles.title, { opacity: headerOpacity }]}>
//           Home – Karol Bagh, New Delhi
//         </Animated.Text>
//         // Zomato logo
//         <Animated.Image
//           source={require('../assets/discZumato.png')}
//           style={[styles.banner, { opacity: headerOpacity }]}
//           resizeMode="cover"
//         />
//       </Animated.View>

//       <Animated.ScrollView
//         contentContainerStyle={styles.scrollContent}
//         // update the scrollY value for nativeevent
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={16}
//       >
//        // rest of the content
//         <View style={{ height: 1000, backgroundColor: '#f5f5f5' }}>
//           <Text>your content</Text>
//         </View>
//       </Animated.ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   header: {
//     position: 'absolute',
//     width: '100%',
//     backgroundColor: '#d62e00',
//     zIndex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingBottom: 10,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   banner: {
//     position: 'absolute',
//     bottom: 0,
//     width: width,
//     height: MAX_HEADER_HEIGHT,
//   },
//   scrollContent: {
//     paddingTop: MAX_HEADER_HEIGHT,
//   },
// });

// import { View, Text, SafeAreaView, Animated, Dimensions } from "react-native";
// import React, { useRef } from "react";
// import Header from "../components/LocationHeader";
// import CategoryList from "../components/CategoryList";
// import HotelList from "../components/HotelList";

// // const { width } = Dimensions.get("window");
// const MAX_HEADER_HEIGHT = 180;
// const MIN_HEADER_HEIGHT = 60;
// const SCROLL_DISTANCE = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;
// const HomeScreen = () => {
//   const scrollY = useRef(new Animated.Value(0)).current;

//   return (
//     <SafeAreaView>
//       <Header
//         scrollY={scrollY}
//         maxHeaderHeight={MAX_HEADER_HEIGHT}
//         minHeaderHeight={MIN_HEADER_HEIGHT}
//         scrollDistance={SCROLL_DISTANCE}
//       />

//       <Animated.ScrollView
//         contentContainerStyle={{
//           paddingTop: MAX_HEADER_HEIGHT + 32,
//         }}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={16}
//       >
//         <CategoryList
//           scrollY={scrollY}
//           maxHeaderHeight={MAX_HEADER_HEIGHT}
//           minHeaderHeight={MIN_HEADER_HEIGHT}
//           scrollDistance={SCROLL_DISTANCE}
//         />
//         <HotelList />
//       </Animated.ScrollView>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;
