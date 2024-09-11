/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  centerAll,
  containerStyle,
  TAB_BAR_HEIGHT,
  vh,
  vw,
} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBarCustom';
import HeaderComponent from '../../components/HeaderComponent';
import GradientBackground from '../../components/GradientBackground';
import Mapbox, {PointAnnotation} from '@rnmapbox/maps';
import {TabBarProps} from '../../services/typeProps';

Mapbox.setAccessToken(
  'pk.eyJ1IjoidGFsamExIiwiYSI6ImNtMHc3bnNkczAxOGEya3IxaTltZHF4Z3oifQ.JQc_12qN-6j_p2LnqV6n-A',
);

const Map = () => {
  useStatusBar('white');
  const [headerTitle, setHeaderTitle] = useState('Hanoi, Vietnam');
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ['All', 'Good', 'Medium', 'Not Good', 'Harmful'];

  return (
    <GradientBackground colors={['white', '#E5FAFD']}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <HeaderComponent title={headerTitle} isBack={false} subtitle=" " />
          <View style={{flex: 1, alignItems: 'center'}}>
            <View
              style={{
                zIndex: 2,
                position: 'absolute',
                backgroundColor: '#697B7C66',
                padding: vw(3),
                borderRadius: 10,
                top: vh(1),
              }}>
              <TabsView
                setTabIndex={setTabIndex}
                tabIndex={tabIndex}
                tabs={tabs}
              />
            </View>
            <View style={styles.page}>
              <View style={styles.mapcontainer}>
                <Mapbox.MapView style={styles.map} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

const TabsView: React.FC<TabBarProps> = ({setTabIndex, tabIndex, tabs}) => {
  return (
    <ScrollView
      horizontal
      style={{width: vw(80)}}
      contentContainerStyle={{columnGap: vw(2)}}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          onPress={() => setTabIndex(index)}
          style={[
            styles.tabContainer,
            centerAll,
            {backgroundColor: tabIndex === index ? '#3E3792' : 'white'},
          ]}>
          <Text
            style={[
              styles.tabTxT,
              {color: tabIndex === index ? 'white' : '#CCCED5'},
            ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
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
  tabContainer: {
    padding: vw(2),
    borderRadius: 10,
  },
  tabTxT: {
    color: '#CCCED5',
    fontSize: 14,
    fontWeight: '700',
  },
});
