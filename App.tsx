import React from "react";
import Navigation from "./Navigation";
import "react-native-gesture-handler";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { NetInfoProvider } from './components/NetInfoContext';


const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NetInfoProvider>
      <Navigation />
      </NetInfoProvider>
      
    </QueryClientProvider>
  );
};

export default App;
