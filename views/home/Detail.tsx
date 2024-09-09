/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle, vh, vw} from '../../services/styleSheet';
import HeaderComponent from '../../components/HeaderComponent';
import {useRoute} from '@react-navigation/native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import GradientBackground from '../../components/GradientBackground';
import {arrowNextIcon, backIcon} from '../../assets/svgXml';
import {AQIDetailData} from '../../services/renderData';
import dayjs from 'dayjs';

const getColorFromAqiIndex = (aqiIndex: number): string => {
  if (aqiIndex <= 50) {
    return '#1BA564';
  } // Good
  if (aqiIndex <= 100) {
    return '#E0D817';
  } // Moderate
  if (aqiIndex <= 150) {
    return '#C77B21';
  } // Unhealthy for Sensitive Groups
  if (aqiIndex <= 200) {
    return '#AC3939';
  } // Unhealthy
  return '#AC3939'; // Hazardous
};

const Detail = () => {
  const route = useRoute();
  const {subTitle} = route.params as {
    subTitle: string;
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % AQIDetailData.length);
  };

  const handleBack = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? AQIDetailData.length - 1 : prevIndex - 1,
    );
  };

  const currentData = AQIDetailData[currentIndex];
  const AQIIndexColor = getColorFromAqiIndex(currentData.aqiIndex);
  const currentDate = dayjs().add(currentIndex, 'day').format('ddd, MM/DD');
  const isToday = currentIndex === 0;
  const isLastIndex = currentIndex === AQIDetailData.length - 1;

  return (
    <GradientBackground colors={['white', '#E5FAFD']}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <HeaderComponent title="Detail" isBack={true} subtitle={subTitle} />
          <CircularProgressView
            aqiIndex={currentData.aqiIndex}
            AQIIndexColor={AQIIndexColor}
            img={currentData.img}
            date={isToday ? 'Today' : currentDate}
            onNext={handleNext}
            onBack={handleBack}
            disableBack={isToday}
            disableNext={isLastIndex}
          />
          <CircularDetailView data={currentData} AQIIndexColor={AQIIndexColor}/>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

const CircularDetailView: React.FC<{data: any, AQIIndexColor: string}> = ({data, AQIIndexColor}) => {
  const renderData = Object.entries(data).filter(
    ([key]) => key !== 'aqiIndex' && key !== 'img',
  );

  return (
    <View style={styles.gridContainer}>
      {renderData.map(([key, value], index) => {
        const [mainText, bracketText] = key.split('(');
        return (
          <View key={index} style={styles.gridItem}>
            <Text style={styles.gridItemKeyText}>
              {mainText}
              {bracketText && (
                <Text style={styles.gridItemBracketText}>({bracketText}</Text>
              )}
            </Text>
            <Text style={[styles.gridItemText, {color: AQIIndexColor}]}>~{String(value)}</Text>
          </View>
        );
      })}
    </View>
  );
};

const CircularProgressView: React.FC<{
  aqiIndex: number;
  AQIIndexColor: string;
  date: string;
  img: any;
  onNext: () => void;
  onBack: () => void;
  disableBack: boolean;
  disableNext: boolean;
}> = ({
  aqiIndex,
  AQIIndexColor,
  date,
  onNext,
  onBack,
  img,
  disableBack,
  disableNext,
}) => {
  const fillPercentage = (aqiIndex / 200) * 100;

  return (
    <View
      style={{
        marginTop: vh(3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <TouchableOpacity
        style={[styles.btnCircularStyle, disableBack && styles.disabledButton]}
        onPress={onBack}
        disabled={disableBack}>
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
              source={img}
            />
            <Text style={styles.dayTxt}>{date}</Text>
            <Text style={[styles.aqiTxt, {color: AQIIndexColor}]}>
              {aqiIndex}
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <TouchableOpacity
        style={[styles.btnCircularStyle, disableNext && styles.disabledButton]}
        onPress={onNext}
        disabled={disableNext}>
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
  disabledButton: {
    opacity: 0.5,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: vw(3),
  },
  gridItem: {
    backgroundColor: 'white',
    width: '30%',
    marginVertical: vh(1),
    padding: vw(2),
    borderRadius: vw(2),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  gridItemKeyText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  gridItemBracketText: {
    fontSize: 10,
    fontWeight: '400',
    color: '#4C4C4C',
  },
  gridItemText: {
    fontSize: 24,
    fontWeight: '700',
  },
});
