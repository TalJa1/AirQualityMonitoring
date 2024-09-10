/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {containerStyle, vw} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBarCustom';
import HeaderComponent from '../../components/HeaderComponent';
import { Picker } from '@react-native-picker/picker';
import { inforCircleIcon } from '../../assets/svgXml';

const Rank = () => {
  useStatusBar('white');
  const [headerData, setHeaderData] = useState({
    title: 'Hanoi',
    subTitle: 'Hoan Kiem, Hanoi',
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderComponent
          title={headerData.title}
          subtitle={headerData.subTitle}
          isBack={false}
        />
        <DateSelectionView />
      </ScrollView>
    </SafeAreaView>
  );
};

const DateSelectionView: React.FC = () => {
  return (
    <View
      style={{
        paddingHorizontal: vw(5),
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
        {/* <Picker
            dropdownIconColor={'#6E778B'}
            selectedValue={}
            style={{
              width: vw(34),
              color: '#272727',
            }}
            onValueChange={itemValue => setSelectedMonth(itemValue)}>
            <Picker.Item label={getMonthYearHomeChart(0)} value="current" />
            <Picker.Item label={getMonthYearHomeChart(-1)} value="previous1" />
            <Picker.Item label={getMonthYearHomeChart(-2)} value="previous2" />
            <Picker.Item label={getMonthYearHomeChart(-3)} value="previous3" />
          </Picker> */}
          {inforCircleIcon(vw(6), vw(6))}
      </View>
  );
};

export default Rank;

const styles = StyleSheet.create({
  container: containerStyle,
});
