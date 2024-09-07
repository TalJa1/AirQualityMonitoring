/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle, vh, vw} from '../../services/styleSheet';
import HeaderComponent from '../../components/HeaderComponent';
import GradientBackground from '../../components/GradientBackground';
import useStatusBar from '../../services/useStatusBarCustom';
import {increasingIcon} from '../../assets/svgXml';

const Home = () => {
  useStatusBar('white');
  return (
    <GradientBackground>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{rowGap: vh(2)}}>
          <HeaderComponent
            title="Location"
            subtitle="Hoan Kiem, Hanoi"
            isBack={false}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                padding: vw(5),
                backgroundColor: 'white',
                width: '90%',
                borderRadius: 12,
                columnGap: vw(2),
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5, // For Android
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#CCCED5',
                  paddingVertical: vh(1.5),
                  width: '30%',
                  borderRadius: 8,
                  alignItems: 'center',
                }}>
                <Text style={[styles.txtColor, {fontWeight: '700'}]}>
                  AQI index
                </Text>
                <Text style={[styles.txtColor, {fontWeight: '700'}]}>
                  Today
                </Text>
                <Text style={{color: '#AC3939', fontSize: 32}}>176</Text>
                <Text style={styles.txtColor}>Detail</Text>
              </View>
              <View
                style={{
                  width: '65%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{color: '#AC3939', fontSize: 16, fontWeight: '700'}}>
                    Harmful (red)
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      backgroundColor: '#FFD9D9',
                      padding: vw(1),
                      borderRadius: 4,
                    }}>
                    <View
                      style={{
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                      }}>
                      {increasingIcon(vw(5), vw(5))}
                    </View>
                    <Text style={{color: '#AC3939', alignSelf: 'flex-start'}}>
                      {' '}
                      12%
                    </Text>
                  </View>
                </View>
                <Text style={{color: '#6E778B', lineHeight: 20}}>
                  Health conditions: People may begin to experience adverse
                  health effects. Sensitive people may experience more serious
                  problems.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: containerStyle,
  txtColor: {
    color: '#4C4C4C',
  },
});
