/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, ViewToken} from 'react-native';
import React, {useRef, useState} from 'react';
import SliderItem from './SliderItem';
import {ImgSliderList} from '../../services/typeProps';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import SliderPagination from './SliderPagination';

const Slider: React.FC<ImgSliderList> = ({itemList}) => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems.length > 0 &&
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  return (
    <View style={{flex: 1}}>
      <View>
        <Animated.FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={itemList}
          onScroll={onScrollHandler}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          renderItem={({item, index}) => (
            <SliderItem index={index} item={item} scrollX={scrollX} />
          )}
        />
      </View>
      <SliderPagination
        items={itemList}
        scrollX={scrollX}
        paginationIndex={paginationIndex}
      />
    </View>
  );
};

export default Slider;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});
