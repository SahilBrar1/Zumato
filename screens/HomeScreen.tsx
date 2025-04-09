import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FlatlistComponent from "../components/FlatlistComponent";

const HomeScreen = ({ navigation }: any) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <FlatlistComponent />
    </QueryClientProvider>
  );
};

export default HomeScreen;
