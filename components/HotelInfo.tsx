import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const CartView = () => {
  return (
    <View>
      <Text style={style.pureveg}>pure veg</Text>
      <Text style={style.maintext}>Italian pizza</Text>
      <View style={style.distance}>
      <Ionicons name="location" />
      <Text>1km  .  Ambala Locality</Text>
      </View>
      <View style={style.distance}>
      <Ionicons name="time" />
      <Text>10-15 minutes  .  schedule fot later</Text>
      </View>
      <View style={style.distance}>
      <View  style={style.btn}  >
      <TouchableOpacity>
        <Text style={style.textop}>frequently reordered</Text>
         </TouchableOpacity>
         </View>
         <View  style={style.btn}  >
         <TouchableOpacity>
            <Text style={style.textop}>Loved by the Delivery partners</Text>
         </TouchableOpacity>
         </View>
         </View>
    </View>
  )
}

export default CartView
const style=StyleSheet.create({
pureveg:{
    backgroundColor:'#abf651',
    color:'green',
    alignSelf:'flex-start',
    padding:3,
    borderRadius:8,
    marginTop:2,
    marginLeft:8
},
maintext:{
fontSize:35,

fontWeight:'bold',
margin:7
},
distance:{
    display:'flex',
    flexDirection:'row',
    margin:1
},
   btn:{
    borderColor:'#d9dcd4 ',
    borderWidth:3,
    alignSelf:'center',
    justifyContent: "space-between",
    margin:20,
    width:160,
    backgroundColor:'#d9dcd4 ',
    borderRadius:50
    
   } ,
   textop:{
    fontSize:12,
    alignSelf:'center',
    padding:2

   }
})