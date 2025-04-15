import { View, Text, TextInput } from 'react-native'
import React from 'react'
import filter from 'lodash.filter';

const RenderHeader = () => {
    function renderHeader() {
        return (    
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              marginVertical: 10,
              borderRadius: 20
            }}
          >
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              value={query}
              onChangeText={queryText => handleSearch(queryText)}
              placeholder="Search"
              style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
            />
          </View>
        );
      }
}

export default RenderHeader