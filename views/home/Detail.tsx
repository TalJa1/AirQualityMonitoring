/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, containerStyle, vh, vw} from '../../services/styleSheet';
import HeaderComponent from '../../components/HeaderComponent';
import {useRoute} from '@react-navigation/native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import GradientBackground from '../../components/GradientBackground';

const Detail = () => {
  const route = useRoute();
  const {subTitle, aqiIndex} = route.params as {
    subTitle: string;
    aqiIndex: number;
  };

  return (
    <GradientBackground colors={['white', '#E5FAFD']}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <HeaderComponent title="Detail" isBack={true} subtitle={subTitle} />
          <CircularProgressView aqiIndex={aqiIndex} />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

const CircularProgressView: React.FC<{aqiIndex: number}> = ({aqiIndex}) => {
  return (
    <View style={[centerAll, {marginTop: vh(3)}]}>
      <AnimatedCircularProgress
        size={vw(55)} // Diameter of the circle
        width={15} // Width of the circle border
        fill={1} // Percentage of the circle to fill
        tintColor="#AC3939" // Color of the filled part
        backgroundColor="white" // Color of the unfilled part
        rotation={0}
        lineCap="round">
        {_ => (
          <View style={styles.circle}>
            <Image
              width={vw(10)}
              height={vw(10)}
              resizeMode="contain"
              source={require('../../assets/home/rain.png')}
            />
            <Text style={styles.dayTxt}>Today</Text>
            <Text style={[styles.aqiTxt]}>{aqiIndex}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: containerStyle,
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  aqiTxt: {
    fontSize: 24,
    fontWeight: '700',
  },
  dayTxt: {
    color: '#6E778B',
    fontSize: 14,
    fontWeight: '500',
  },
});
