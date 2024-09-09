/* eslint-disable react-native/no-inline-styles */
import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {PaginationSliderPropsComponent} from '../../services/typeProps';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {vh, vw} from '../../services/styleSheet';

const {width} = Dimensions.get('window');

const SliderPagination: React.FC<PaginationSliderPropsComponent> = ({
  items,
  paginationIndex,
  scrollX,
}) => {
  return (
    <View style={styles.container}>
      {items.map((_, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const pgAnimatedStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [8, 20, 8],
            Extrapolation.CLAMP,
          );
          return {
            width: dotWidth,
          };
        });

        return (
          <Animated.View
            key={index}
            style={[
              {
                width: 8,
                height: 8,
                borderRadius: 4,
              },
              pgAnimatedStyle,
              {
                backgroundColor:
                  paginationIndex === index ? '#3E3792' : '#6E778B',
              },
            ]}
          />
        );
      })}
    </View>
  );
};

export default SliderPagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: vw(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(1),
  },
});
