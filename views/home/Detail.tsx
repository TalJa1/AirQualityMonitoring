/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle, vh, vw} from '../../services/styleSheet';
import HeaderComponent from '../../components/HeaderComponent';
import {useRoute} from '@react-navigation/native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import GradientBackground from '../../components/GradientBackground';
import {arrowNextIcon, backIcon} from '../../assets/svgXml';

const getColorFromAqiIndex = (aqiIndex: number): string => {
  if (aqiIndex <= 50) {
    return '#1BA564';
  } // Good
  if (aqiIndex <= 100) {
    return '#FFFF00';
  } // Moderate
  if (aqiIndex <= 150) {
    return '#FF7E00';
  } // Unhealthy for Sensitive Groups
  if (aqiIndex <= 200) {
    return '#AC3939';
  } // Unhealthy
  if (aqiIndex <= 300) {
    return '#8F3F97';
  } // Very Unhealthy
  return '#7E0023'; // Hazardous
};

const Detail = () => {
  const route = useRoute();
  const {subTitle, aqiIndex} = route.params as {
    subTitle: string;
    aqiIndex: number;
  };

  const AQIIndexColor = getColorFromAqiIndex(aqiIndex);

  return (
    <GradientBackground colors={['white', '#E5FAFD']}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <HeaderComponent title="Detail" isBack={true} subtitle={subTitle} />
          <CircularProgressView
            aqiIndex={aqiIndex}
            AQIIndexColor={AQIIndexColor}
          />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

const CircularProgressView: React.FC<{
  aqiIndex: number;
  AQIIndexColor: string;
}> = ({aqiIndex, AQIIndexColor}) => {
  const fillPercentage = (aqiIndex / 500) * 100;

  return (
    <View
      style={{
        marginTop: vh(3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <TouchableOpacity style={styles.btnCircularStyle}>
        {backIcon(vw(7), vw(7), '#D5CFF9')}
      </TouchableOpacity>
      <AnimatedCircularProgress
        size={vw(55)} // Diameter of the circle
        width={15} // Width of the circle border
        fill={fillPercentage} // Percentage of the circle to fill
        tintColor={AQIIndexColor} // Color of the filled part
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
            <Text style={[styles.aqiTxt, {color: AQIIndexColor}]}>
              {aqiIndex}
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <TouchableOpacity style={styles.btnCircularStyle}>
        {arrowNextIcon(vw(7), vw(7), '#D5CFF9')}
      </TouchableOpacity>
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
  btnCircularStyle: {
    backgroundColor: 'white',
    padding: vw(3),
    borderRadius: vw(10),
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius
    elevation: 5, // Elevation for Android
  },
});
