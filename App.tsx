/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './views/begin/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './views/begin/Onboarding';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {vh, vw} from './services/styleSheet';
import Home from './views/main/Home';
import Rank from './views/main/Rank';
import Map from './views/main/Map';
import {homeIcon, mapIcon, rankIcon} from './assets/svgXml';
import Detail from './views/home/Detail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#3E3792',
          tabBarInactiveTintColor: '#6E778B',
          tabBarShowLabel: true,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => {
              const iconSize = focused ? vw(7) : vw(6);
              return (
                <View style={styles.tabBarItem}>
                  {focused && <View style={styles.activeLine} />}
                  <View style={styles.tabIcon}>
                    {homeIcon(iconSize, iconSize, color)}
                  </View>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Rank"
          component={Rank}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => {
              const iconSize = focused ? vw(7) : vw(6);
              return (
                <View style={styles.tabBarItem}>
                  {focused && <View style={styles.activeLine} />}
                  <View style={styles.tabIcon}>
                    {rankIcon(iconSize, iconSize, color)}
                  </View>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => {
              const iconSize = focused ? vw(7) : vw(6);
              return (
                <View style={styles.tabBarItem}>
                  {focused && <View style={styles.activeLine} />}
                  <View style={styles.tabIcon}>
                    {mapIcon(iconSize, iconSize, color)}
                  </View>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {/* Main || Login */}
      <Stack.Navigator initialRouteName="Login">
        {/* Main layout with 3 bottom tabs */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        {/* end here */}
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: vh(8),
    borderRadius: 12,
    position: 'absolute',
    bottom: vh(1),
    left: vw(5),
    right: vw(5),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: vh(1),
  },
  tabIcon: {
    position: 'relative',
    top: vh(1),
  },
  activeLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: vh(0.5), // Use viewport height for height
    borderBottomLeftRadius: vw(5),
    borderBottomRightRadius: vw(5),
    backgroundColor: '#3E3792',
  },
  tabBarItem: {
    height: '100%',
  },
});

export default App;
