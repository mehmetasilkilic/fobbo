import { useRef } from "react";
import { Animated } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export const FadeInView = (props, { navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const animatedViewStyle = {
    flex: 1,
    opacity: fadeAnim, // Bind opacity to animated value
  };

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };
  });

  return (
    <Animated.View // Special animatable View
      style={animatedViewStyle}
    >
      {props.children}
    </Animated.View>
  );
};
