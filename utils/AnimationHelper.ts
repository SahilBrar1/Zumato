import { useEffect } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

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

export { animatedStyle };
