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
import LinearGradient from 'react-native-linear-gradient';

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
  const currentDate = dayjs().add(currentIndex, 'day').format('ddd, DD/MM');
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
          <CircularDetailView
            data={currentData}
            AQIIndexColor={AQIIndexColor}
          />
          <View style={{rowGap: vh(1)}}>
            <AdviseView />
            <GeneralView />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

const AdviseView: React.FC = () => {
  const data = [
    'Avoid outdoor activities, especially vigorous physical activities.',
    'Stay indoors and close windows to prevent polluted air from entering.',
    'Use an air purifier if possible.',
  ];
  return (
    <View>
      <View style={styles.adviseContainer}>
        <View style={styles.adviseTitle}>
          <Text style={styles.adviseTitleText}>Advise</Text>
        </View>
        <LinearGradient
          colors={['#B0C7F7', 'white']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.line}
        />
      </View>
      <View style={{paddingHorizontal: vw(5), marginVertical: vh(2)}}>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#272727'}}>
          Prevention measures:
        </Text>
        <View style={styles.listContainer}>
          {data.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bulletPoint}>{'\u2022'}</Text>
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const GeneralView: React.FC = () => {
  return (
    <View>
      <View style={styles.adviseContainer}>
        <View style={styles.adviseTitle}>
          <Text style={styles.adviseTitleText}>General forecast</Text>
        </View>
        <LinearGradient
          colors={['#B0C7F7', 'white']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.line}
        />
      </View>
      <View style={{paddingHorizontal: vw(5), marginVertical: vh(2)}}>
        <Text style={styles.listItemText}>
          When the AQI is at 150-200, the air has begun to cause harm to health,
          especially for sensitive people. Following preventative measures and
          minimizing exposure to air pollution is important to protect the
          health of you and your family.
        </Text>
      </View>
    </View>
  );
};

const CircularDetailView: React.FC<{data: any; AQIIndexColor: string}> = ({
  data,
  AQIIndexColor,
}) => {
  const renderData = Object.entries(data).filter(
    ([key]) => key !== 'aqiIndex' && key !== 'img',
  );

  return (
    <View style={styles.gridContainer}>
      {renderData.map(([key, value], index) => {
        const [mainText, bracketText] = key.split('(');
        return (
          <View key={index} style={styles.gridItem}>
            <View
              style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <KeyText mainText={mainText} bracketText={bracketText} />
              </View>
            </View>
            <View style={styles.valueContainer}>
              <Text style={[styles.gridItemText, {color: AQIIndexColor}]}>
                ~{String(value)}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const KeyText: React.FC<{mainText: string; bracketText?: string}> = ({
  mainText,
  bracketText,
}) => {
  const [textWidth, setTextWidth] = useState(0);

  return (
    <View style={styles.keyContainer}>
      <Text
        style={styles.gridItemKeyText}
        onLayout={event => {
          const {width} = event.nativeEvent.layout;
          setTextWidth(width);
        }}>
        {mainText}
        {bracketText && (
          <Text style={styles.gridItemBracketText}>({bracketText}</Text>
        )}
      </Text>
      <View style={[styles.bottomLine, {width: textWidth}]} />
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
    width: '30%',
    marginVertical: vh(1),
  },
  bottomLine: {
    height: 1,
    backgroundColor: '#D5CFF9',
    position: 'absolute',
    bottom: 0,
  },
  keyContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    flexShrink: 1,
    padding: vw(1.5),
    borderTopRightRadius: vw(2),
    borderTopLeftRadius: vw(2),
    shadowColor: '#3E3792',
    shadowOffset: {width: 0, height: -2}, // Shadow offset (no bottom shadow)
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  valueContainer: {
    backgroundColor: 'white',
    borderTopRightRadius: vw(2),
    borderBottomRightRadius: vw(2),
    borderBottomLeftRadius: vw(2),
    paddingHorizontal: vw(2),
    paddingVertical: vw(3),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3E3792',
    shadowOffset: {width: 0, height: 2}, // Shadow offset (no top shadow)
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gridItemKeyText: {
    fontSize: 10,
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
  adviseTitle: {
    backgroundColor: '#3E3792',
    flexShrink: 1,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: vw(3),
    paddingVertical: vw(1.5),
  },
  adviseTitleText: {
    color: '#FCFCFC',
    fontSize: 16,
    fontWeight: '700',
  },
  adviseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  line: {
    flex: 1,
    height: 4,
  },
  listContainer: {
    marginTop: vw(2),
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: vw(1),
  },
  bulletPoint: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: vw(2),
    color: '#6E778B',
  },
  listItemText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6E778B',
    lineHeight: 22,
  },
});
