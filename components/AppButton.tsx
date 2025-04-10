import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Ratebutton from "./Ratebutton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface AppButtonProps {
  onPress?: () => void;
  name: string;
  color?: string;
}

const AppButton = ({ name }: AppButtonProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <TouchableOpacity
      activeOpacity={0.1}
      style={styles.appButtonContainer}
      onPress={() => navigation.navigate("Details")}
    >
      
        <Image
          style={styles.img}
          source={require("../assets/pizzaimg.jpg")}
          // resizeMode="cover"
        />
    <View style={styles.padding}>
      <View style={styles.time}>
        <Ionicons name="time" />
        
        <Text>23 min  </Text>
        <Text>  2.2km</Text>
      </View>
      <View style={styles.textflex}>
        <Text style={styles.appButtonText}>{name}</Text>
        <Ratebutton />
      </View>
      <Text style={styles.margin}>Flat Rs. 150 off above Rs. 299</Text>
      </View>
    </TouchableOpacity>
    
  );
};

export default AppButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor:'white',
  fontFamily: 'Georgia, serif',
    height: 280,
    // // borderWidth:1,
    shadowOpacity:1,
    //  borderColor:'white',
    borderRadius:12,
 shadowRadius:6,
 position:'static',
 
 textShadowColor:'black',
 elevation:5,
    shadowColor:'black',
    shadowOffset:{width:0, height:4}
  },
  appButtonText: {
    fontSize: 23,
    color: "black",
    fontWeight: "bold",
    margin:1
    
    
  },
  img: {
    height: 200,
    width: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  time: {
    display: "flex",
    flexDirection: "row",
    marginTop:4,
    alignItems:'center'
  },
  dot: {
    fontWeight: "bold",
  },
  textflex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  padding:{
    padding:7
  },
  margin:{
  paddingBottom:7
  }
});
