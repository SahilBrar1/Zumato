

import React from "react";
import { View, Text, Button } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FlatlistComponent from "../components/FlatlistComponent";

import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const queryClient = new QueryClient();
  return (
     
    <QueryClientProvider client={queryClient}>
      
       <FlatlistComponent />
     </QueryClientProvider>
    
  );
};

export default HomeScreen;
