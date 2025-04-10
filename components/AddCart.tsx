import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Coupon from "./Coupon";
import Delivery from "./Delivery";

import Ionicons from '@expo/vector-icons/Ionicons';


const AddCart = () => {
  return (
    <View>
    <View style={styles.bg}>
      <View style={styles.viewtext} >
      <Text style={styles.textweight}>Get Gold for 3 months</Text>
        <Text>Unlimited free deliveries & more benefits </Text>
        <Text style={styles.textweight}>Learn more</Text>
      </View>
      <View style={styles.mrg} >
      <Text style={styles.textweight}>Amritsari Kulcha</Text>
      <Text  style={styles.textweight } >Edit</Text>
      </View>
      <View style={styles.linedot}>
        <TouchableOpacity><Text style={styles.more}>+add more items</Text></TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.addview}>
        <View>
        <View style={styles.flexbox} >
        <Ionicons name="document"   />
        <Text>Add a note for the restaurant</Text>
        </View>
        </View>
      </View>
      <Coupon/>
 <Delivery />
 
 
    </View>
   
  );
};

const styles = StyleSheet.create({
  viewtext: {
   margin:10,
    borderWidth:3,
    borderRadius:20,
    borderColor:'beige',
    padding: 10,
    backgroundColor: "beige",
    
  },
  
  textweight:{
    fontWeight:'bold',
    
  },
  more:{
    
    color:'red',
    fontWeight:'bold',
    padding:20
  },
  addview:{
borderWidth:3,
width:200,
borderColor:'grey',
padding:2,
alignSelf:'center',
marginRight:200,
borderRadius:20
  },
  dot:{
    borderBottomColor:'black',
    borderBottomWidth:1,
    borderStyle:'solid',
    marginVertical:10,
    
},
linedot:{
  borderBottomColor:'black',
  borderBottomWidth:1,
  borderStyle:'dashed',
  // marginVertical:10,
  
},
mrg:{
padding:20
  
},
flexbox:{
  display:'flex',
  flexDirection:'row',
  padding:4
},
bg:{
backgroundColor:'#fadbd8'
}
 
});

export default AddCart;

