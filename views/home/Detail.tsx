/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, containerStyle, vw} from '../../services/styleSheet';
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
    <View style={centerAll}>
      <AnimatedCircularProgress
        size={vw(50)} // Diameter of the circle
        width={20} // Width of the circle border
        fill={1} // Percentage of the circle to fill
        tintColor="#AC3939" // Color of the filled part
        backgroundColor="white" // Color of the unfilled part
        rotation={0}
        lineCap="round">
        {_ => (
          <View style={styles.circle}>
            <Text style={styles.points}>{aqiIndex}</Text>
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
  points: {},
});
