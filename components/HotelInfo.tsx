import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const CartView = () => {
  return (
    <View>
      <View style={style.flex}>
      <Ionicons name="leaf" />
      <Text style={style.pureveg}>pure veg</Text>
      </View>
      <Text style={style.maintext}>Italian pizza</Text>
      <View style={style.distance}>
      <Ionicons name="location" />
      <Text  style={style.font}>1km  .  Ambala Locality</Text>
      </View>
      <View style={style.distance}>
      <Ionicons name="time" />
      <Text style={style.font}>10-15 minutes  .  schedule fot later</Text>
      </View>
      <View style={style.line}>
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
fontFamily:'cursive',
fontWeight:'condensed',
margin:7

},
distance:{
    display:'flex',
    flexDirection:'row',
    margin:1,
   
},
   btn:{
    borderColor:'whitess ',
    borderWidth:3,
    alignSelf:'center',
    justifyContent: "space-between",
    margin:10,
    width:180,
    backgroundColor:'#d9dcd4 ',
    borderRadius:50,
    elevation:1,
    height:30,
    alignItems:'center'
    
   } ,
   textop:{
    fontSize:12,
    alignSelf:'center',
    padding:2,
  

   },
   line:{
  
    borderBottomColor:'black',
    borderBottomWidth:1,
    borderStyle:'dashed',
     padding:10
},
font:{
  fontWeight:'bold'
},
flex:{
  display:'flex',
  flexDirection:'row'
}
})