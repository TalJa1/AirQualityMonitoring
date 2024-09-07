/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBarCustom';
import HeaderComponent from '../../components/HeaderComponent';

const Home = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <HeaderComponent
          title="Location"
          subtitle="Hoan Kiem, Hanoi"
          isBack={false}
        />
        <View>
          <Text style={{color: 'red'}}>Home</Text>
          <Text>Debugging Text</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: containerStyle,
});
