import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";

type ItemProps = { name: string; id?: number };

const Itemcomponent = ({ name }: ItemProps) => {
  return (

    <View>
      
    <View style={styles.screenContainer}>

      <AppButton name={name} />
    </View>
     </View>
  );
};
export default Itemcomponent;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
