import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
const Coupon = () => {
  return (
    <View style={styles.flexible} >
<Ionicons name="checkmark-circle"   />
   <Text>View All Coupons</Text>
    </View>
  )
}

export default Coupon
const styles = StyleSheet.create({
    flexible:{
        padding:5,
        display:"flex",
        flexDirection:"row",
    borderWidth:1,
    alignSelf:'center',
    borderRadius:10,
    marginRight:280
    },
   
     
    
    })