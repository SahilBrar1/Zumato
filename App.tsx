import React from "react";
import Navigation from "./Navigation";
import "react-native-gesture-handler";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { NetInfoProvider } from "./components/NetInfoContext";
import { CartProvider } from "./components/CartContext";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NetInfoProvider>
        <CartProvider>
          <Navigation />
        </CartProvider>
      </NetInfoProvider>
    </QueryClientProvider>
  );
};

export default App;
