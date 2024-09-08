import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import SliderItem from './SliderItem';
import {ImgSliderList} from '../../services/typeProps';

const Slider: React.FC<ImgSliderList> = ({itemList}) => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={itemList}
        renderItem={({item, index}) => <SliderItem index={index} item={item} />}
      />
    </View>
  );
};

export default Slider;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});
