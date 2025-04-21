import React from "react";
import Navigation from "./Navigation";
import "react-native-gesture-handler";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { NetInfoProvider } from "./components/NetInfoContext";
import { CartProvider } from "./components/CartContext";
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const App = () => {
  const queryClient = new QueryClient();
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  });

  // useEffect(() => {
  //   async function prepare() {
  //     if (fontsLoaded) {
  //       await SplashScreen.hideAsync();
  //     }
  //   }
  //   prepare();
  // }, [fontsLoaded]);

  // if (!fontsLoaded) return null;
  
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
