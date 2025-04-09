import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

type ItemProps = {
    title: string,
  };
  const List = ({title} : ItemProps) => {
    return (
      <View>
        <TouchableOpacity  >
          <Text>{title}</Text>
          </TouchableOpacity>
      </View>
    )
  }

export default List