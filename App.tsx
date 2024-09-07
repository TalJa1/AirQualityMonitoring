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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const TabNavigator = () => {
    return (
      <View style={styles.tabContainer}>
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
              tabBarLabel: 'Home',
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View style={styles.iconContainer}>
                    {focused && <View style={styles.activeLine} />}
                    {homeIcon(iconSize, iconSize, color)}
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
                  <View style={styles.iconContainer}>
                    {focused && <View style={styles.activeLine} />}
                    {rankIcon(iconSize, iconSize, color)}
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
                  <View style={styles.iconContainer}>
                    {focused && <View style={styles.activeLine} />}
                    {mapIcon(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
      </View>
    );
  };

  return (
    <NavigationContainer>
      {/* Main || Login */}
      <Stack.Navigator initialRouteName="Home1">
        {/* Main layout with 3 bottom tabs */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        {/* end here */}
        <Stack.Screen
          name="Home1"
          component={Home}
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
  tabContainer: {
    position: 'absolute',
    bottom: vh(2),
    left: vw(5),
    right: vw(5),
    borderRadius: 12,
    shadowColor: '#E8E9F6',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },
  tabBar: {
    height: vh(8),
    borderRadius: 12,
    paddingVertical: vh(1),
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: vh(1),
  },
  iconContainer: {
    alignItems: 'center',
  },
  activeLine: {
    position: 'absolute',
    top: '-45%', // Adjust to place the line on the border
    left: 0,
    right: 0,
    height: vh(0.5), // Use viewport height for height
    borderBottomLeftRadius: vw(5),
    borderBottomRightRadius: vw(5),
    backgroundColor: '#3E3792',
  },
});

export default App;
