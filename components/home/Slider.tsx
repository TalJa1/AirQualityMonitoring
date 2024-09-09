import {StyleSheet, View} from 'react-native';
import React from 'react';
import SliderItem from './SliderItem';
import {ImgSliderList} from '../../services/typeProps';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const Slider: React.FC<ImgSliderList> = ({itemList}) => {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });
  return (
    <View>
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={itemList}
        onScroll={onScrollHandler}
        renderItem={({item, index}) => (
          <SliderItem index={index} item={item} scrollX={scrollX} />
        )}
      />
    </View>
  );
};

export default Slider;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});
