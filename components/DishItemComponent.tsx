import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getHeight, getWidth } from "../utils/Stylehelper";
import { useCart } from "./CartContext";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type ItemProp = {
  title: string;
  price: number;
};
const DishItemComponent = ({ title, price }: ItemProp) => {
  const { cart, addToCart, removeFromCart } = useCart();
  // console.log("price", price);

  //animation logic
  const translateY = useSharedValue(-1000);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.ease),
    });
    opacity.value = withTiming(1, {
      duration: 500,
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });
  //animation logic

  const isItemInCart = cart.find((cartItem: any) => cartItem.title === title);

  return (
    <Animated.View style={[style.viewcontiner, animatedStyle]}>
      <View style={style.touch}>
        <View style={style.firstView}>
          <Text style={style.bestSeller}>Best Seller</Text>

          <Text style={style.titleText}>{title}</Text>

          <View style={style.starflex}>
            <Ionicons name="star" size={16} color={"gold"} />
            <Ionicons name="star" size={16} color={"gold"} />
            <Ionicons name="star" size={16} color={"gold"} />
            <Ionicons name="star" size={16} color={"gold"} />
            <Ionicons name="star-outline" size={16} />
            <Text> (320)</Text>
          </View>

          <Text style={style.priceText}>Rs. {price}</Text>
          <Text style={style.discountText}>50% Off</Text>
          <Text style={style.descText}>Gently Cooked</Text>
        </View>

        <View style={style.secondView}>
          <Image style={style.img} source={require("../assets/pizzaimg.jpg")} />
          <View style={style.cartbtn}>
            <TouchableOpacity
              onPress={() => removeFromCart({ title, quantity: 1 })}
              style={{
                backgroundColor: "white",
                width: getWidth(20),
                height: getHeight(30),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{isItemInCart ? isItemInCart.quantity : "ADD"}</Text>
            <TouchableOpacity
              onPress={() => {
                addToCart({ title, quantity: 1 });
              }}
              style={{
                backgroundColor: "white",
                width: getWidth(20),
                height: getHeight(30),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default DishItemComponent;

const style = StyleSheet.create({
  viewcontiner: {
    // borderWidth: 1,
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  touch: {
    flexDirection: "row",
    padding: 10,
  },
  firstView: {
    flex: 3 / 2,
    justifyContent: "space-between",
    // paddingRight: 7,
    // borderWidth: 2,
  },
  secondView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: getHeight(120),
    width: getHeight(120),
    borderRadius: 10,
  },
  starflex: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  bestSeller: {
    color: "green",
    fontWeight: "bold",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 4,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 2,
  },
  discountText: {
    color: "red",
    fontWeight: "bold",
  },
  descText: {
    color: "gray",
    marginTop: 2,
  },
  cartbtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: getWidth(80),
    height: getHeight(30),
    justifyContent: "space-between",
    // borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "white",
  },
  centeredView: {
    // flex: 1,
  },
  modalView: {
    justifyContent: "center",
    height: getHeight(100),
    width: getWidth(330),
    margin: 20,
    backgroundColor: "red",
    borderRadius: 20,
    // padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "white",
  },
  viewcart: {
    justifyContent: "center",
    alignItems: "center",
    height: getHeight(35),
  },
});

// import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
// import React, { useEffect } from "react";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { getHeight, getWidth } from "../utils/Stylehelper";
// import { useCart } from "./CartContext";
// import Animated, {
//   Easing,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from "react-native-reanimated";

// type ItemProp = {
//   title: string;
// };

// const DishItemComponent = ({ title }: ItemProp) => {
//   const { cart, addToCart, removeFromCart } = useCart();

//   // Animation logic
//   const translateY = useSharedValue(-1000);
//   const opacity = useSharedValue(0);

//   useEffect(() => {
//     translateY.value = withTiming(0, {
//       duration: 1000,
//       easing: Easing.out(Easing.ease),
//     });
//     opacity.value = withTiming(1, {
//       duration: 500,
//     });
//   }, []);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateY: translateY.value }],
//       opacity: opacity.value,
//     };
//   });

//   const isItemInCart = cart.find((cartItem: any) => cartItem.title === title);

//   return (
//     <Animated.View style={[style.viewContainer, animatedStyle]}>
//       <View style={style.touch}>
//         <View style={style.firstView}>
//           <Text style={style.bestSeller}>Best Seller</Text>
//           <Text style={style.titleText}>{title}</Text>

//           <View style={style.starflex}>
//             <Ionicons name="star" size={16} color={"gold"} />
//             <Ionicons name="star" size={16} color={"gold"} />
//             <Ionicons name="star" size={16} color={"gold"} />
//             <Ionicons name="star" size={16} color={"gold"} />
//             <Ionicons name="star-outline" size={16} />
//             <Text> (320)</Text>
//           </View>

//           <Text style={style.priceText}>Rs. 69.50</Text>
//           <Text style={style.discountText}>50% Off</Text>
//           <Text style={style.descText}>Gently Cooked</Text>
//         </View>

//         <View style={style.secondView}>
//           <View style={style.imageWrapper}>
//             <Image
//               style={style.img}
//               source={require("../assets/pizzaimg.jpg")}
//             />
//             <View style={style.cartbtn}>
//               <TouchableOpacity
//                 onPress={() => removeFromCart({ title, quantity: 1 })}
//                 style={style.cartBtnSingle}
//               >
//                 <Text style={style.cartBtnText}>-</Text>
//               </TouchableOpacity>

//               <Text style={style.cartQtyText}>
//                 {isItemInCart ? isItemInCart.quantity : "ADD"}
//               </Text>

//               <TouchableOpacity
//                 onPress={() => addToCart({ title, quantity: 1 })}
//                 style={style.cartBtnSingle}
//               >
//                 <Text style={style.cartBtnText}>+</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//     </Animated.View>
//   );
// };

// export default DishItemComponent;

// const style = StyleSheet.create({
//   viewContainer: {
//     margin: 8,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//   },
//   touch: {
//     flexDirection: "row",
//     padding: 10,
//   },
//   firstView: {
//     flex: 3 / 2,
//     justifyContent: "space-between",
//   },
//   secondView: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   imageWrapper: {
//     position: "relative",
//   },
//   img: {
//     height: getHeight(120),
//     width: getHeight(120),
//     borderRadius: 10,
//   },
//   starflex: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 4,
//   },
//   bestSeller: {
//     color: "green",
//     fontWeight: "bold",
//   },
//   titleText: {
//     fontWeight: "bold",
//     fontSize: 16,
//     marginVertical: 4,
//   },
//   priceText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginVertical: 2,
//   },
//   discountText: {
//     color: "red",
//     fontWeight: "bold",
//   },
//   descText: {
//     color: "gray",
//     marginTop: 2,
//   },
//   cartbtn: {
//     // position: "absolute",
//     // bottom: 10,
//     // right: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     // backgroundColor: "#fff",
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     // elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   cartBtnSingle: {
//     // backgroundColor: "#f0f0f0",
//     // borderRadius: 15,
//     // width: 30,
//     // height: 30,
//     // alignItems: "center",
//     // justifyContent: "center",
//     // marginHorizontal: 5,
//   },
//   cartBtnText: {
//     // fontSize: 18,
//     // fontWeight: "bold",
//   },
//   cartQtyText: {
//     // fontSize: 14,
//     // fontWeight: "600",
//   },
// });
