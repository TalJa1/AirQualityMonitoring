/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import Mapbox, {Camera, PointAnnotation} from '@rnmapbox/maps';
import {Location, TabBarProps} from '../../services/typeProps';
import Geolocation from 'react-native-geolocation-service';

Mapbox.setAccessToken(
  'pk.eyJ1IjoidGFsamExIiwiYSI6ImNtMHc3bnNkczAxOGEya3IxaTltZHF4Z3oifQ.JQc_12qN-6j_p2LnqV6n-A',
);

const Map = () => {
  useStatusBar('white');
  const [headerTitle, setHeaderTitle] = useState('Hanoi, Vietnam');
  const [tabIndex, setTabIndex] = useState(0);
  const [location, setLocation] = useState<Location | null>(null);
  const tabs = ['All', 'Good', 'Medium', 'Not Good', 'Harmful'];

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission denied');
          return;
        }
      }
      Geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    requestLocationPermission();
  }, []);

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
                <Mapbox.MapView style={styles.map}>
                  {location && (
                    <Camera
                      zoomLevel={14}
                      centerCoordinate={[location.longitude, location.latitude]}
                      animationMode={'flyTo'}
                      animationDuration={1000}
                    />
                  )}
                  {location && (
                    <PointAnnotation
                      id="currentLocation"
                      coordinate={[location.longitude, location.latitude]}>
                      <View
                        style={{
                          height: vw(3),
                          width: vw(3),
                          backgroundColor: 'red',
                          borderRadius: 15,
                        }}
                      />
                    </PointAnnotation>
                  )}
                </Mapbox.MapView>
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
          key={index}
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
