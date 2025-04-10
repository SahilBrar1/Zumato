import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'

const ViewCart2 = () => {
  return (  
    <View style={styles.flexible} >
          <View style={styles.btn}  >
        <TouchableOpacity activeOpacity={0.4}>
              <Text >filters</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.btn} >
          <TouchableOpacity activeOpacity={0.4}>
           
           <Text >bestseller</Text>
        
       </TouchableOpacity>
       </View>
       <View style={styles.btn} >
       <TouchableOpacity activeOpacity={0.4}>
           
           <Text >rated</Text>
        
       </TouchableOpacity>
       </View>
       <View style={styles.btn} >
       <TouchableOpacity activeOpacity={0.4}>
           
           <Text >Vegan</Text>
        
       </TouchableOpacity>
          </View>
          </View>
  )
}

export default ViewCart2

const styles=StyleSheet.create({
    btn:{
        borderWidth:3,
        alignSelf:'center',
        padding:3,
        width:80,
        borderRadius:10
    },
flexible:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',

    padding:30
}
})

