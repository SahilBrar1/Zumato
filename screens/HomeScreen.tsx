// import React from "react";
// import FlatlistComponent from "../components/FlatlistComponent";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const HomeScreen = () => {
//   const queryClient = new QueryClient();
//   return (
//     <QueryClientProvider client={queryClient}>
//       <FlatlistComponent />
//     </QueryClientProvider>
//   );
// };

// export default HomeScreen;

import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("DetailsScreen")}
      />
    </View>
  );
};

export default HomeScreen;
