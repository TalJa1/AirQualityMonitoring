/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {containerStyle, TAB_BAR_HEIGHT, vw} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBarCustom';
import HeaderComponent from '../../components/HeaderComponent';
import {Picker} from '@react-native-picker/picker';
import {inforCircleIcon} from '../../assets/svgXml';
import {getRandomData} from '../../services/renderData';

const Rank = () => {
  useStatusBar('white');
  const [headerData, setHeaderData] = useState({
    title: 'Hanoi',
    subTitle: 'Hoan Kiem, Hanoi',
  });
  const [selectedDate, setSelectedDate] = useState('current');
  const {dateData, randomData} = getRandomData();

  const filterDataByAQI = (min: number, max: number) => {
    return randomData
      .filter(item => {
        const aqi = parseFloat(item.value.split('-')[1]);
        return aqi >= min && aqi <= max;
      })
      .sort((a, b) => {
        const aqiA = parseFloat(a.value.split('-')[1]);
        const aqiB = parseFloat(b.value.split('-')[1]);
        return aqiB - aqiA; // Sort in descending order
      });
  };

  const renderAQIContainer = (data: {label: string; value: string}[]) => {
    const groups = [
      {title: 'Harmful', min: 151, max: 200},
      {title: 'Not good', min: 101, max: 150},
      {title: 'Medium', min: 51, max: 100},
      {title: 'Good', min: 0, max: 50},
    ];

    let currentIndex = 1;

    return (
      <View>
        {groups.map(group => {
          const filteredData = filterDataByAQI(group.min, group.max);
          return (
            <View key={group.title} style={styles.aqiContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.aqiTitle}>{group.title}</Text>
                <Text style={styles.aqiTitle}>AQI</Text>
              </View>
              {filteredData.map((item, index) => {
                const [district, aqiIndex] = item.value.split('-');
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      marginVertical: vw(1),
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#4C4C4C',
                        fontWeight: '500',
                      }}>
                      • {currentIndex++} {district}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#4C4C4C',
                        fontWeight: '700',
                      }}>
                      {aqiIndex}
                    </Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <HeaderComponent
            title={headerData.title}
            subtitle={headerData.subTitle}
            isBack={false}
          />
          <DateSelectionView
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            dateData={dateData}
            randomData={randomData}
          />
          {renderAQIContainer(randomData)}
        </View>
        <View style={{height: TAB_BAR_HEIGHT}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const DateSelectionView: React.FC<{
  selectedDate: string;
  setSelectedDate: (value: string) => void;
  dateData: {label: string; value: string}[];
  randomData: {label: string; value: string}[];
}> = ({selectedDate, setSelectedDate, dateData, randomData}) => {
  return (
    <View style={{paddingHorizontal: vw(5), width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Picker
          dropdownIconColor={'#6E778B'}
          selectedValue={selectedDate}
          style={{
            width: vw(50),
            color: '#272727',
          }}
          onValueChange={itemValue => setSelectedDate(itemValue)}>
          {dateData.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
        {inforCircleIcon(vw(6), vw(6))}
      </View>
    </View>
  );
};

export default Rank;

const styles = StyleSheet.create({
  container: containerStyle,
  aqiContainer: {
    marginVertical: vw(5),
    paddingHorizontal: vw(5),
  },
  aqiTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#272727',
    marginBottom: vw(2),
  },
  harmful: {
    // Add specific styles for harmful group if needed
  },
  notGood: {
    // Add specific styles for not good group if needed
  },
  medium: {
    // Add specific styles for medium group if needed
  },
  good: {
    // Add specific styles for good group if needed
  },
});
