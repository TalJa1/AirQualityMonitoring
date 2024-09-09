import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientBackgroundProps } from '../services/typeProps';

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children, colors }) => {
  const start = useRef(new Animated.Value(0)).current;
  const end = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animateGradient = () => {
      Animated.sequence([
        Animated.timing(start, {
          toValue: Math.random(),
          duration: 5000,
          useNativeDriver: false,
        }),
        Animated.timing(end, {
          toValue: Math.random(),
          duration: 5000,
          useNativeDriver: false,
        }),
      ]).start(() => animateGradient());
    };

    animateGradient();
  }, [start, end]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...StyleSheet.absoluteFillObject }}>
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFillObject}
        />
      </Animated.View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GradientBackground;