// import React, { memo, useEffect } from "react";
// import { StyleSheet } from "react-native";
// import AppButton from "./AppButton";
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
//   Easing,
// } from "react-native-reanimated";
// import { getWidth } from "../utils/Stylehelper";

// type ItemProps = { restaurant: any };

// const ItemComponent = ({ restaurant }: ItemProps) => {
//   const translateY = useSharedValue(-50);
//   const opacity = useSharedValue(0);

//   useEffect(() => {
//     translateY.value = withTiming(0, {
//       duration: 500,
//       easing: Easing.out(Easing.ease),
//     });
//     opacity.value = withTiming(1, { duration: 500 });
//   }, []);
//   console.log("ItemComponent rendered again");

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ translateY: translateY.value }],
//     opacity: opacity.value,
//   }));

//   return (
//     <Animated.View style={[styles.screenContainer, animatedStyle]}>
//       <AppButton
//         name={restaurant.name}
//         photo={restaurant.avatar}
//         // menu={restaurant.menu}
//         deliveryTime={restaurant.deliveryTime}
//         distance={restaurant.distance}
//       />
//     </Animated.View>
//   );
// };

// export default memo(ItemComponent);

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     justifyContent: "center",
//     padding: getWidth(12),
//   },
// });

import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";

import { getWidth } from "../utils/Stylehelper";

type ItemProps = { restaurant: any };

const ItemComponent = ({ restaurant }: ItemProps) => {
  return (
    <View style={styles.screenContainer}>
      <AppButton
        name={restaurant.name}
        photo={restaurant.avatar}
        deliveryTime={restaurant.deliveryTime}
        distance={restaurant.distance}
      />
    </View>
  );
};

export default memo(ItemComponent);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: getWidth(12),
  },
});
