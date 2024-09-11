/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  containerStyle,
  TAB_BAR_HEIGHT,
  vh,
  vw,
} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBarCustom';
import HeaderComponent from '../../components/HeaderComponent';
import GradientBackground from '../../components/GradientBackground';
import Mapbox, {PointAnnotation} from '@rnmapbox/maps';

Mapbox.setAccessToken(
  'pk.eyJ1IjoidGFsamExIiwiYSI6ImNtMHc3bnNkczAxOGEya3IxaTltZHF4Z3oifQ.JQc_12qN-6j_p2LnqV6n-A',
);

const Map = () => {
  useStatusBar('white');
  const [headerTitle, setHeaderTitle] = useState('Hanoi, Vietnam');

  return (
    <GradientBackground colors={['white', '#E5FAFD']}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <HeaderComponent title={headerTitle} isBack={false} subtitle=" " />
          <View style={styles.page}>
            <View style={styles.mapcontainer}>
              <Mapbox.MapView style={styles.map} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {flex: 1},
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapcontainer: {
    height: vh(80),
    width: vw(90),
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
});
