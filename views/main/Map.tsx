/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBarCustom';
import HeaderComponent from '../../components/HeaderComponent';
import GradientBackground from '../../components/GradientBackground';

const Map = () => {
  useStatusBar('white');
  const [headerTitle, setHeaderTitle] = useState('Hanoi, Vietnam');

  return (
    <GradientBackground colors={['white', '#E5FAFD']}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <HeaderComponent title={headerTitle} isBack={false} />
          <View>
            <Text>Map</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {flex: 1},
});
