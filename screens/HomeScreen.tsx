import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HotelList from "../components/HotelList";

const HomeScreen = ({ navigation }: any) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HotelList />
    </QueryClientProvider>
  );
};

export default HomeScreen;
