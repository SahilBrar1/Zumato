import React, { useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  Animated,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MAX_HEADER_HEIGHT = 180;
const MIN_HEADER_HEIGHT = 60;
const SCROLL_DISTANCE = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;
const { width } = Dimensions.get("window");

const Header: React.FC = ({ searchText, setSearchText, scrollY }: any) => {
  
  // const headerHeight = scrollY.interpolate({
  //   inputRange: [0, SCROLL_DISTANCE],
  //   outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
  //   extrapolate: "clamp",
  // });

  const opacity = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE / 2, SCROLL_DISTANCE],
    outputRange: [1, 0.5, 0],
    extrapolate: "clamp",
  });


  // const translateY = scrollY.interpolate({
  //   inputRange: [0, SCROLL_DISTANCE],
  //   outputRange: [0, -65],
  //   extrapolate: "clamp",
  // });

  return (
    <Animated.View style={[styles.container, { height: 60}]}>
      {/* <Animated.View style={[styles.topRow, { opacity }]}>
        <Ionicons name="location-outline" size={20} color="#fff" />
        <Text style={styles.locationText}>Logicease, Ambala</Text>
        <TouchableOpacity style={styles.profileBtn}>
          <Image source={require("../assets/logo.png")} style={styles.avatar} />
        </TouchableOpacity>
      </Animated.View> */}

      {/* <Animated.View style={[{backgroundColor: "green", marginTop: 12, paddingHorizontal: 16, height: 180},]}> */}
      <Animated.View style={[styles.searchRow]}>
      {/* { transform: [{ translateY }] } actually this property should be inside animated.view with searchRow style*/}
        <Ionicons
          name="search"
          size={18}
          color="#999"
          style={{ marginHorizontal: 8 }}
        />
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search restaurants, cuisines..."
          style={styles.searchInput}
        />
      </Animated.View>
        
      {/* </Animated.View> */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight || 0,
    // position: "absolute",

    width: "100%",
    backgroundColor: "#d62e00",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 16,
  },
  locationText: {
    color: "#fff",
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
    borderRadius: 50,
  },
  searchRow: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 12,
    height: 40,
    width: width - 32,
    opacity:1,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
});

export default Header;

// import { View, StyleSheet } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import React from "react";
// import { getHeight, getWidth } from "../utils/Stylehelper";

// const LocationHeader = () => {
//   return (
//     <View style={styles.container}>
//       <Ionicons name="location" size={25} />
//       <View style={styles.dashedLine}></View>
//       <Ionicons name="menu" size={25} />
//     </View>
//   );
// };

// export default LocationHeader;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     backgroundColor: "white",
//     height: getHeight(32),
//     width: "100%",
//     marginTop: getHeight(10),
//   },
//   dashedLine: {
//     borderBottomWidth: 1,
//     borderStyle: "dashed",
//     borderColor: "black",
//     width: getWidth(298),
//     marginVertical: getHeight(4),
//   },
// });

// import React from "react";
// import {
//   Text,
//   StyleSheet,
//   Animated,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Dimensions,
//   StatusBar,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// interface HeaderProps {
//   scrollY: Animated.Value;
//   maxHeaderHeight: number;
//   minHeaderHeight: number;
//   scrollDistance: number;
// }

// const { width } = Dimensions.get("window");

// const Header: React.FC<HeaderProps> = ({
//   scrollY,
//   maxHeaderHeight,
//   minHeaderHeight,
//   scrollDistance,
// }) => {
//   const headerHeight = scrollY.interpolate({
//     inputRange: [0, scrollDistance],
//     outputRange: [maxHeaderHeight, minHeaderHeight],
//     extrapolate: "clamp",
//   });

//   // const opacity = scrollY.interpolate({
//   //   inputRange: [0, scrollDistance / 2, scrollDistance],
//   //   outputRange: [1, 0.5, 0],
//   //   extrapolate: "clamp",
//   // });

//   const translateY = scrollY.interpolate({
//     inputRange: [0, scrollDistance],
//     outputRange: [0, -45],
//     extrapolate: "clamp",
//   });

//   return (
//     <Animated.View style={[styles.container, { height: headerHeight }]}>
//       <Animated.View style={[styles.topRow]}>
//         <Ionicons name="location-outline" size={20} color="#fff" />
//         <Text style={styles.locationText}>Logicease, Ambala</Text>
//         <TouchableOpacity style={styles.profileBtn}>
//           <Image source={require("../assets/logo.png")} style={styles.avatar} />
//         </TouchableOpacity>
//       </Animated.View>

//       <Animated.View
//         style={[styles.searchRow, { transform: [{ translateY }] }]}
//       >
//         <Ionicons
//           name="search"
//           size={18}
//           color="#999"
//           style={{ marginHorizontal: 8 }}
//         />
//         <TextInput
//           placeholder="Search restaurants, cuisines..."
//           style={styles.searchInput}
//         />
//       </Animated.View>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: StatusBar.currentHeight || 0,
//     position: "absolute",
//     top: 0,
//     width: "100%",
//     backgroundColor: "#d62e00",
//     paddingHorizontal: 16,
//     paddingBottom: 8,
//     zIndex: 10,
//   },
//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: 8,
//   },
//   locationText: {
//     color: "#fff",
//     fontSize: 16,
//     flex: 1,
//     marginLeft: 4,
//   },
//   profileBtn: {
//     padding: 4,
//   },
//   avatar: {
//     width: 32,
//     height: 32,
//     borderRadius: 50,
//   },
//   searchRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     marginTop: 8,
//     height: 40,
//     width: width - 32,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 14,
//     color: "#333",
//   },
// });

// export default Header;
