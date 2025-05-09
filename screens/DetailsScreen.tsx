import React from "react";
import { View, Text } from "react-native";
import HotelInfo from "../components/HotelInfo";
import DishFilters from "../components/DishFilters";
import DishesList from "../components/DishesList";
import { getHeight } from "../utils/Stylehelper";
import DetailHeader from "../components/DetailHeader";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ParamListRoute } from "../navigationTypes";

type DetailsScreenRouteProp = RouteProp<ParamListRoute, "Details">;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { restaurant } = route.params;
  const { name, deliveryTime, distance } = restaurant;
  // console.log("I am DetailsScreen AND I rendered again");
  // console.log("restaurant", restaurant);
  // console.log("distance", distance);

  return (
    <View style={{ height: "100%" }}>
      <DetailHeader />
      <HotelInfo name={name} deliverTime={deliveryTime} dist={distance} />
      {/* <DishFilters /> */}
      <DishesList />
    </View>
  );
};

export default DetailsScreen;

// import React from "react";
// import { View, ScrollView } from "react-native";
// import HotelInfo from "../components/HotelInfo";
// import DishFilters from "../components/DishFilters";
// import DishesList from "../components/DishesList";
// import DetailHeader from "../components/DetailHeader";

// type MenuItem = {
//   id: string;
//   title: string;
//   description?: string;
//   price?: number;
//   image?: string;
//   rating?: number;
//   discount?: string;
// };

// type DetailsScreenProps = {
//   route: {
//     params: {
//       name: string;
//       menu: MenuItem[];
//     };
//   };
// };

// const DetailsScreen = ({ route }: DetailsScreenProps) => {
//   const { name, menu } = route.params;

//   return (
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       <DetailHeader />
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <HotelInfo />
//         {/* <DishFilters /> */}
//         <DishesList menu={menu} />
//       </ScrollView>
//     </View>
//   );
// };

// export default DetailsScreen;
