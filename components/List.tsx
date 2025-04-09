import { View, Text,TouchableOpacity ,Image,StyleSheet} from 'react-native'
import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons';
type ItemProps = {
    title: string,
  };
  const List = ({title} : ItemProps) => {
    return (
      <View style={style.viewcontiner}>
        <TouchableOpacity  >
          <View >
            <Text>best Seller</Text>
            <Text style={style.textt}>Rajma chawal[500ml, 1 Box Serves 1]</Text>
            <View style={style.starflex}>
            <Ionicons name="star" color={"yellow"}/>
            <Ionicons name="star" color={"yellow"}/>  
            <Ionicons name="star" color={"yellow"}/>
              <Ionicons name="star" color={"yellow"}/>
              <Ionicons name="star" />
              <Text>  (320)</Text>
              </View>
             
              </View>
              <View>
              <Text>Rs. 69.50</Text>
              <Text>Rs. 69.50</Text>
              <Text>50% Off</Text>
              <View>
              <Image style={style.img} source={require("../assets/pizzaimg.jpg")} />
              </View>
              <Text>Gently simmered red kidney  beans cooked in onion
                 tomato masala and aromatic indian spices </Text>
                 
          </View>
          </TouchableOpacity>
          
      </View>
    )
  }

export default List
const style= StyleSheet.create({
  viewcontiner:{
    borderWidth:3,
    height:250,
    margin:5,
    borderRadius:20,
    padding:1,
    
   
  },
  img:{
 
 height:100,
 width:100,
 overflow:'hidden',
 alignSelf:'flex-end',


},
starflex:{
 
display:'flex',
flexDirection:'row',

},
textt:
{
fontWeight:'bold',
fontSize:20
}
})