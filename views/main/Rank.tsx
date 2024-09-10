/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
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
    return randomData.filter(item => {
      const aqi = parseInt(item.label.split('AQI: ')[1], 10);
      return aqi >= min && aqi <= max;
    });
  };

  const renderAQIContainer = (
    title: string,
    data: {label: string; value: string}[],
  ) => (
    <View style={styles.aqiContainer}>
      <Text style={styles.aqiTitle}>{title}</Text>
      {data.map((item, index) => (
        <Text
          key={index}
          style={{fontSize: 16, color: '#272727', marginVertical: vw(1)}}>
          {item.label}
        </Text>
      ))}
    </View>
  );

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
          {renderAQIContainer('Harmful', filterDataByAQI(151, 200))}
          {renderAQIContainer('Not good', filterDataByAQI(101, 150))}
          {renderAQIContainer('Medium', filterDataByAQI(51, 100))}
          {renderAQIContainer('Good', filterDataByAQI(0, 50))}
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
});
