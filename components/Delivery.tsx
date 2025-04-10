import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Mybutton from './Mybutton'

const Delivery = () => {
  return (
    <View>
        <View style={style.borderw}>
        <View style={style.dot}>
        <Text style={style.weight}>You saved Rs. 19 on delivery</Text>
        <Text style={style.weight}>Auto-applied as your order is above Rs.149</Text>
        </View>
        <View style={style.paddingonly}>
        <View style={style.itsmargin}>
        <Text>save Rs. 226 with Savesuper</Text>
        <Text>View All Coupons</Text>
        </View>
        </View>
        <View style={style.borderw}>
        <View style={style.dot}>
     <Text style={style.weight}>Delivery  in 15-20 minutes</Text>
     <Text style={style.weight}>Want this later? Schedule it</Text>
     </View>
     
     <View style={style.itsmargin}>
    <Text >rs.Total bill 820.83</Text>
    <Text >Include taxes and charges</Text>
    </View>
    </View>
    </View>
    <View style={style.button}>
    <Mybutton/>
    </View>
    </View>
  )
}

export default Delivery
const style=StyleSheet.create({
    weight:{
        fontWeight:'bold',
        marginLeft:20,
        margin:7,
        fontSize:16
        
    },
   
    itsmargin:{
margin:10,
padding:10
    },
    dot:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        borderStyle:'dotted',
        marginVertical:10,
        
        
    },
    borderw:{
        borderWidth:2,
        height:150,
        borderRadius:30,
      
        
    },
    paddingonly:{
        padding:3
    },
    button:{
padding:120,
margin:6
    }
})