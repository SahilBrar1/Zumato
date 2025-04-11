import React from "react";
import { useNetInfo } from '../components/NetInfoContext';
import {Text} from 'react-native'
import HotelList from "../components/HotelList";

const HomeScreen = ({ navigation }: any) => {
  const { isConnected } = useNetInfo();
  return (<>
  <HotelList />
    <Text>Network Status: {isConnected ? 'Online' : 'Offline'}</Text>
  </>
      
  );
};

export default HomeScreen;
