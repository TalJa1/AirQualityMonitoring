/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Easing,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, containerStyle, vh, vw} from '../../services/styleSheet';
import HeaderComponent from '../../components/HeaderComponent';
import GradientBackground from '../../components/GradientBackground';
import useStatusBar from '../../services/useStatusBarCustom';
import {homeInfoIcon, increasingIcon, upIcon} from '../../assets/svgXml';
import {AQIDetailsData} from '../../services/renderData';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';
import {getMonthYearHomeChart} from '../../services/timeServices';

const Home = () => {
  useStatusBar('white');
  const slideAnim = useRef(new Animated.Value(0)).current; // Initial value for sliding animation
  const [isSlidUp, setIsSlidUp] = useState(false); // State to track if the view is slid up

  const toggleSlide = () => {
    Animated.timing(slideAnim, {
      toValue: isSlidUp ? 0 : -vh(15), // Adjust this value to stop just below the top of the view above
      duration: 500, // Duration of the animation
      easing: Easing.inOut(Easing.ease), // Add easing for a smoother animation
      useNativeDriver: true,
    }).start(() => {
      setIsSlidUp(!isSlidUp); // Toggle the state after the animation completes
    });
  };

  return (
    <GradientBackground>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{rowGap: vh(2)}}>
          <HeaderComponent
            title="Location"
            subtitle="Hoan Kiem, Hanoi"
            isBack={false}
          />
          {/* Render main content */}
          <View style={{flex: 1, alignItems: 'center'}}>
            <AQIMain toggleSlide={toggleSlide} />
            <Animated.View
              style={{
                backgroundColor: '#F7F9FF',
                width: '80%',
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5, // For Android
                zIndex: 1, // Ensure this view is below the first view
                transform: [{translateY: slideAnim}],
                overflow: 'hidden',
              }}>
              <AQIDetails />
            </Animated.View>
            <ChartView />
          </View>
          {/* end here */}
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

const ChartView: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('current');

  return (
    <View style={{marginVertical: vh(2), rowGap: vh(2)}}>
      <View
        style={{
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: 'row',
          paddingHorizontal: vw(5),
        }}>
        <Text style={{color: '#272727', fontSize: 16, fontWeight: '700'}}>
          AQI Chart
        </Text>
        {homeInfoIcon(vw(6), vw(6))}
      </View>
      <View style={styles.chartViewContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Picker
            dropdownIconColor={'#6E778B'}
            selectedValue={selectedMonth}
            style={{
              width: vw(34),
              color: '#272727',
            }}
            onValueChange={itemValue => setSelectedMonth(itemValue)}>
            <Picker.Item label={getMonthYearHomeChart(-1)} value="previous" />
            <Picker.Item label={getMonthYearHomeChart(0)} value="current" />
            <Picker.Item label={getMonthYearHomeChart(1)} value="next" />
          </Picker>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              backgroundColor: '#FFD9D9',
              padding: vw(1),
              borderRadius: 4,
            }}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              {increasingIcon(vw(5), vw(5))}
            </View>
            <Text style={{color: '#AC3939', alignSelf: 'flex-start'}}>
              {' '}
              12%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const AQIDetails: React.FC = () => {
  return (
    <LinearGradient
      colors={['#F7F9FF', 'white']}
      style={styles.aqiDetailscontainer}>
      {AQIDetailsData.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <View style={styles.iconContainer}>{item.icon}</View>
          <Text style={styles.dataText}>{item.data}</Text>
          <Text style={styles.labelText}>{item.label}</Text>
        </View>
      ))}
    </LinearGradient>
  );
};

const AQIMain: React.FC<{toggleSlide: () => void}> = ({toggleSlide}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: vw(5),
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 12,
        columnGap: vw(2),
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android
        zIndex: 2,
      }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#CCCED5',
          paddingVertical: vh(1.5),
          width: '30%',
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Text style={[styles.txtColor, {fontWeight: '700'}]}>AQI index</Text>
        <Text style={[styles.txtColor, {fontWeight: '700'}]}>Today</Text>
        <Text style={{color: '#AC3939', fontSize: 32}}>176</Text>
        <Text style={styles.txtColor}>Detail</Text>
      </View>
      <View
        style={{
          width: '65%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#AC3939', fontSize: 16, fontWeight: '700'}}>
            Harmful (red)
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              backgroundColor: '#FFD9D9',
              padding: vw(1),
              borderRadius: 4,
            }}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              {increasingIcon(vw(5), vw(5))}
            </View>
            <Text style={{color: '#AC3939', alignSelf: 'flex-start'}}>
              {' '}
              12%
            </Text>
          </View>
        </View>
        <Text style={{color: '#6E778B', lineHeight: 20}}>
          Health conditions: People may begin to experience adverse health
          effects. Sensitive people may experience more serious problems.
        </Text>
      </View>
      <TouchableOpacity
        style={[
          {
            backgroundColor: 'white',
            borderRadius: vw(50),
            padding: vw(2),
            zIndex: 10,
            position: 'absolute',
            bottom: -vh(2),
            left: '50%',
          },
          centerAll,
        ]}
        onPress={toggleSlide}>
        {upIcon(vw(5), vw(5), '#3E3792')}
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: containerStyle,
  txtColor: {
    color: '#4C4C4C',
  },
  aqiDetailscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(2),
    width: '100%',
  },
  itemContainer: {
    alignItems: 'center',
    width: '20%',
    rowGap: vh(0.5),
  },
  iconContainer: {
    marginRight: vw(2),
  },
  dataText: {
    fontSize: vw(3),
    fontWeight: 'bold',
    marginRight: vw(2),
    color: '#3E3792',
    textAlign: 'center',
  },
  labelText: {
    fontSize: vw(2.5),
    color: '#6E778B',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  chartViewContainer: {
    marginHorizontal: vw(5),
    paddingHorizontal: vw(3),
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
  },
});
