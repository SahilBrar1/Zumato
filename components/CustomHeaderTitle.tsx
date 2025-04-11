import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const CustomHeaderTitle = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
    </View>
  );
};

export default CustomHeaderTitle;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain', // Optional: helps scale the image properly
  },
});
