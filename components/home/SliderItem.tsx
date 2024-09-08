import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageSliderPropsComponent} from '../../services/typeProps';
import {vh, vw} from '../../services/styleSheet';

const SliderItem: React.FC<ImageSliderPropsComponent> = ({index, item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} style={{width: vw(80), height: vh(20)}} />
      <Text>{index}</Text>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    width: vw(100),
    alignItems: 'center',
  },
});
