import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const Imgcomponent = () => {
  return (
    <View>
       <Image style={style.img} source={require("../assets/zomato.jpg")} />
    </View>
  )
}

export default Imgcomponent
const style= StyleSheet.create({
  img:{
 height:20
   
   }
  })