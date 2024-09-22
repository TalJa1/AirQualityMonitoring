/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, vh, vw} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBarCustom';
import HeaderComponent from '../../components/HeaderComponent';
import GradientBackground from '../../components/GradientBackground';
import Mapbox, {Camera, MarkerView, PointAnnotation} from '@rnmapbox/maps';
import {
  Location,
  TabBarProps,
  UserInforInterface,
} from '../../services/typeProps';
import Geolocation from 'react-native-geolocation-service';
import {Mapicons} from '../../services/renderData';
import {loadData, saveData} from '../../services/storage';
import {
  goodQualityIcon,
  harmfulQualityIcon,
  mediumQualityIcon,
  notGoodQualityIcon,
} from '../../assets/svgXml';

Mapbox.setAccessToken(
  'pk.eyJ1IjoidGFsamExIiwiYSI6ImNtMHc3bnNkczAxOGEya3IxaTltZHF4Z3oifQ.JQc_12qN-6j_p2LnqV6n-A',
);

const Map = () => {
  useStatusBar('white');
  const [headerTitle, setHeaderTitle] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  const [location, setLocation] = useState<Location | null>(null);
  const [randomLocations, setRandomLocations] = useState<Location[]>([]);
  const [renderRandom, setRenderRandom] = useState<Location[]>([]);
  const tabs = ['All', 'Good', 'Medium', 'Not Good', 'Harmful'];
  const [loading, setLoading] = useState(true);
  const [markerClicked, setMarkerClicked] = useState<null | Number>(null);

  useEffect(() => {
    loadData<UserInforInterface>('userInforStorage')
      .then(loadedData => {
        const tmp = loadedData.location.split(',')[1];
        setHeaderTitle(`${tmp.trim()}, Vietnam`);
        console.log('loadedData', loadedData);
      })
      .catch(() => {
        saveData('userInforStorage', {
          name: '',
          age: '',
          goal: '',
          location: 'Hoan Kiem, Hanoi',
        });
        setHeaderTitle('Hanoi, Vietnam');
      });
  }, []);

  const generateRandomLocations = (
    baseLocation: Location,
    count: number,
    radius: number,
  ): Location[] => {
    const locations: Location[] = [];
    for (let i = 0; i < count; i++) {
      const randomLocation = getRandomLocation(baseLocation, radius);
      locations.push(randomLocation);
    }
    return locations;
  };

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
        const currentLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocation(currentLocation);
        const generatedLocations = generateRandomLocations(
          currentLocation,
          8,
          1000,
        );
        setRandomLocations(generatedLocations);
        setRenderRandom(generatedLocations); // Set initial renderRandom
        setLoading(false); // Set loading to false once locations are set
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const getRandomLocation = (
    baseLocation: Location,
    radius: number,
  ): Location => {
    const y0 = baseLocation.latitude;
    const x0 = baseLocation.longitude;
    const rd = radius / 111300; // Convert radius from meters to degrees

    const u = Math.random();
    const v = Math.random();
    const w = rd * Math.sqrt(u);
    const t = 2 * Math.PI * v;
    const x = w * Math.cos(t);
    const y = w * Math.sin(t);

    const newLat = y + y0;
    const newLon = x + x0;

    return {latitude: newLat, longitude: newLon};
  };

  const updateRenderRandom = (index: number) => {
    if (index === 0) {
      setRenderRandom(randomLocations);
    } else {
      const indices = [index - 1, index - 1 + 4];
      setRenderRandom(
        indices.map(idx => randomLocations[idx % randomLocations.length]),
      );
    }
  };

  useEffect(() => {
    updateRenderRandom(tabIndex);
  }, [tabIndex, randomLocations]);

  const selectedIcons = useMemo(() => {
    switch (tabIndex) {
      case 0:
        return Mapicons;
      case 1:
        return [goodQualityIcon(vw(8), vw(8))];
      case 2:
        return [mediumQualityIcon(vw(8), vw(8))];
      case 3:
        return [notGoodQualityIcon(vw(8), vw(8))];
      case 4:
        return [harmfulQualityIcon(vw(8), vw(8))];
      default:
        return [];
    }
  }, [tabIndex]);

  const getColorByIndex = (index: number) => {
    if (tabIndex === 0) {
      switch (index % 4) {
        case 0:
          return '#1BA564';
        case 1:
          return '#E0D818';
        case 2:
          return '#C77A20';
        case 3:
          return '#AC3939';
        default:
          return 'black';
      }
    } else {
      switch (tabIndex) {
        case 1:
          return '#1BA564';
        case 2:
          return '#E0D818';
        case 3:
          return '#C77A20';
        case 4:
          return '#AC3939';
        default:
          return 'black'; // Default color if none of the cases match
      }
    }
  };

  const getAQIMap = (color: string) => {
    const getRandomFromPair = (pair: [number, number]) => {
      return pair[Math.floor(Math.random() * pair.length)];
    };

    switch (color) {
      case '#1BA564':
        return getRandomFromPair([31, 44]);
      case '#E0D818':
        return getRandomFromPair([89, 95]);
      case '#C77A20':
        return getRandomFromPair([138, 145]);
      case '#AC3939':
        return getRandomFromPair([178, 199]);
      default:
        return 0;
    }
  };

  return (
    <GradientBackground colors={['white', '#E5FAFD']}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <HeaderComponent title={headerTitle} isBack={false} subtitle=" " />
          <View style={{flex: 1, alignItems: 'center'}}>
            <View
              style={{
                zIndex: 2,
                position: 'absolute',
                backgroundColor: '#BBC1C3',
                borderRadius: 10,
                top: vh(1),
              }}>
              <TabsView
                setTabIndex={setTabIndex}
                tabIndex={tabIndex}
                tabs={tabs}
              />
            </View>
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            ) : (
              <View style={styles.page}>
                <View style={styles.mapcontainer}>
                  <Mapbox.MapView style={styles.map}>
                    {location && (
                      <Camera
                        zoomLevel={14}
                        centerCoordinate={[
                          location.longitude,
                          location.latitude,
                        ]}
                        animationMode={'flyTo'}
                        animationDuration={500}
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
                    {renderRandom.map((loc, index) => {
                      return (
                        <MarkerView
                          key={`${tabIndex}-${index}`}
                          id={`randomLocation${tabIndex}-${index}`}
                          coordinate={[loc.longitude, loc.latitude]}>
                          <TouchableOpacity
                            style={centerAll}
                            onPress={() => setMarkerClicked(index)}>
                            {selectedIcons[index % selectedIcons.length]}
                            {markerClicked === index && (
                              <View
                                style={[
                                  {
                                    zIndex: -1,
                                    backgroundColor: 'white',
                                    borderRadius: 8,
                                    padding: vw(2),
                                    position: 'relative',
                                    top: vh(-0.6),
                                  },
                                  centerAll,
                                ]}>
                                <Text
                                  style={{
                                    color: getColorByIndex(index),
                                    fontWeight: '700',
                                    fontSize: 12,
                                  }}>
                                  AQI: {getAQIMap(getColorByIndex(index))}
                                </Text>
                              </View>
                            )}
                          </TouchableOpacity>
                        </MarkerView>
                      );
                    })}
                  </Mapbox.MapView>
                </View>
              </View>
            )}
          </View>
          <View style={{height: vh(9)}} />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

const TabsView: React.FC<TabBarProps> = ({setTabIndex, tabIndex, tabs}) => {
  return (
    <ScrollView
      horizontal
      style={{width: vw(85)}}
      contentContainerStyle={{columnGap: vw(2), padding: vw(2)}}>
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
  loadingContainer: {
    position: 'absolute',
    top: vh(40),
  },
});
