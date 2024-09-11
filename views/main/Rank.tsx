/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  containerStyle,
  TAB_BAR_HEIGHT,
  vh,
  vw,
} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBarCustom';
import HeaderComponent from '../../components/HeaderComponent';
import {Picker} from '@react-native-picker/picker';
import {inforCircleIcon} from '../../assets/svgXml';
import {getRandomData} from '../../services/renderData';
import GradientBackground from '../../components/GradientBackground';
import {loadData, saveData} from '../../services/storage';
import {UserInforInterface} from '../../services/typeProps';

const Rank = () => {
  useStatusBar('white');
  const [headerData, setHeaderData] = useState({
    title: '',
    subTitle: '',
  });
  const [selectedDate, setSelectedDate] = useState('current');
  const {dateData, randomData} = getRandomData(headerData.title);

  useEffect(() => {
    loadData<UserInforInterface>('userInforStorage')
      .then(loadedData => {
        setHeaderData({
          title: loadedData.location.split(',')[1],
          subTitle: loadedData.location,
        });
        console.log('loadedData', loadedData);
      })
      .catch(() => {
        saveData('userInforStorage', {
          name: '',
          age: '',
          goal: '',
          location: 'Hoan Kiem, Hanoi',
        });
        setHeaderData({
          title: 'Hanoi',
          subTitle: 'Hoan Kiem, Hanoi',
        });
      });
  }, []);

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
      {
        title: 'Harmful',
        min: 151,
        max: 200,
        color: '#AC3939',
        backColor: '#FFE5E599',
      },
      {
        title: 'Not good',
        min: 101,
        max: 150,
        color: '#C77A20',
        backColor: '#FFF1E099',
      },
      {
        title: 'Medium',
        min: 51,
        max: 100,
        color: '#E0D818',
        backColor: '#FFFEE899',
      },
      {
        title: 'Good',
        min: 0,
        max: 50,
        color: '#1BA564',
        backColor: '#DEFCEE99',
      },
    ];

    let currentIndex = 1;

    return (
      <View>
        {groups.map(group => {
          const filteredData = filterDataByAQI(group.min, group.max);
          return (
            <View
              key={group.title}
              style={[
                styles.aqiContainer,
                {
                  borderWidth: 1,
                  borderColor: group.color,
                  backgroundColor: group.backColor,
                },
              ]}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={[styles.aqiTitle, {color: group.color}]}>
                  {group.title}
                </Text>
                <Text
                  style={{fontSize: 16, fontWeight: '700', color: group.color}}>
                  AQI
                </Text>
              </View>
              <View
                style={{width: '80%', height: 1, backgroundColor: '#FCFCFC'}}
              />
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
                        color: '#6E778B',
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
    <GradientBackground colors={['white', '#E5FAFD']}>
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
            <View style={{marginHorizontal: vw(5)}}>
              {renderAQIContainer(randomData)}
            </View>
          </View>
          <View style={{height: TAB_BAR_HEIGHT}} />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
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
    marginVertical: vw(2),
    paddingHorizontal: vw(5),
    paddingVertical: vh(1),
    borderRadius: 10,
  },
  aqiTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#272727',
    marginBottom: vw(2),
  },
});
