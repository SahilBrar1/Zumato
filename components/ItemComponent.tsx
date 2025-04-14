import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
import { getHeight, getWidth } from "../utils/Stylehelper";

type ItemProps = { name: string; id?: number };

const Itemcomponent = ({ name }: ItemProps) => {
  return (
    <View style={styles.screenContainer}>
      <AppButton name={name} />
    </View>
  );
};
export default Itemcomponent;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: getWidth(12),
  },
});
