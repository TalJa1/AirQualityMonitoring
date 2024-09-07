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
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
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
                  <View style={styles.iconContainer}>
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
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={TabNavigator}
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
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabBar: {
    borderTopColor: 'transparent',
    backgroundColor: 'white',
    height: vh(8),
    borderRadius: 20,
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
});

export default App;
