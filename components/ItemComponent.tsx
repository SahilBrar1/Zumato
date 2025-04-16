import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
import { getHeight, getWidth } from "../utils/Stylehelper";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";

type ItemProps = { name: string; id?: number };

const Itemcomponent = ({ name }: ItemProps) => {
  const translateY = useSharedValue(-50);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 500,
      easing: Easing.out(Easing.ease),
    });
    opacity.value = withTiming(1, {
      duration: 500,
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });
  return (
    <Animated.View style={[styles.screenContainer, animatedStyle]}>
      <AppButton name={name} />
    </Animated.View>
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
