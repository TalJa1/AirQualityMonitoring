/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageSliderPropsComponent} from '../../services/typeProps';
import {vh, vw} from '../../services/styleSheet';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {saveIcon} from '../../assets/svgXml';

const {width} = Dimensions.get('window');

const SliderItem: React.FC<ImageSliderPropsComponent> = ({
  index,
  item,
  scrollX,
}) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.15, 0, width * 0.15],
            Extrapolation.CLAMP,
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.6, 1, 0.6],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.container, rnAnimatedStyle]}>
      <Image
        source={item.img}
        style={{width: vw(80), height: vh(20), borderRadius: 20}}
      />
      <View style={styles.imgDesContainer}>
        <View style={{rowGap: vh(1)}}>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#FCFCFC'}}>
            {item.title}
          </Text>
          <Text style={{fontSize: 12, color: '#FCFCFC'}}>
            {item.description}
          </Text>
        </View>
        {saveIcon(vw(5), vw(5), '#6E778B')}
      </View>
    </Animated.View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
  },
  imgDesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(2),
    width: vw(80),
    backgroundColor: '#3E3792',
    paddingVertical: vh(1),
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
  },
});
