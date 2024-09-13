/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, containerStyle, vh, vw} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBarCustom';
import {LoginBtnProps} from '../../services/typeProps';
import {appleIcon, googleIcon} from '../../assets/svgXml';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {loadData} from '../../services/storage';

const Login = () => {
  useStatusBar('white');
  const [isFinishOnboarding, setIsFinishOnboarding] = useState(false);
  useEffect(() => {
    loadData<boolean>('onboardingFinish')
      .then(data => {
        setIsFinishOnboarding(data);
      })
      .catch(() => {
        setIsFinishOnboarding(false);
      });
  }, []);
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: 'white'}]}>
      <ScrollView
        style={{paddingHorizontal: vw(5)}}
        contentContainerStyle={{
          marginVertical: vh(1),
          flex: 1,
        }}>
        <View
          style={{alignItems: 'center', justifyContent: 'flex-end', flex: 1}}>
          <Image source={require('../../assets/login/login.png')} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View style={{rowGap: vh(1), marginBottom: vh(5)}}>
            <BtnLayout
              title="Sign In"
              btnColor="#3E3792"
              textColor="white"
              isFinishOnboarding={isFinishOnboarding}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#4C4C4C'}}>Need an account? </Text>
              <TouchableOpacity>
                <Text
                  style={{color: '#4C4C4C', textDecorationLine: 'underline'}}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: vh(2),
              }}>
              <View style={{flex: 1, height: 1, backgroundColor: '#4C4C4C'}} />
              <Text style={{marginHorizontal: vw(2), color: '#4C4C4C'}}>
                OR
              </Text>
              <View style={{flex: 1, height: 1, backgroundColor: '#4C4C4C'}} />
            </View>
            <BtnLayout
              isFinishOnboarding={isFinishOnboarding}
              title="Continue with Google"
              btnColor="white"
              textColor="#0000008A"
              icon={googleIcon(vw(6), vw(6))}
            />
            <BtnLayout
              isFinishOnboarding={isFinishOnboarding}
              title="Continue with Apple"
              btnColor="black"
              textColor="white"
              icon={appleIcon(vw(6), vw(6))}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const BtnLayout: React.FC<LoginBtnProps & {isFinishOnboarding: boolean}> = ({
  btnColor,
  textColor,
  title,
  icon,
  isFinishOnboarding,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <TouchableOpacity
      disabled={title !== 'Sign In'}
      onPress={() => {
        if (isFinishOnboarding) {
          navigation.navigate('Main');
        } else {
          navigation.navigate('Onboarding');
        }
      }}
      id={title}
      style={[
        {
          backgroundColor: btnColor,
          borderRadius: 44,
          paddingVertical: vh(1.5),
          flexDirection: 'row',
          columnGap: vw(2),
        },
        centerAll,
        styles.shadow,
      ]}>
      {icon}
      <Text style={{fontSize: 20, fontWeight: 500, color: textColor}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: containerStyle,
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
});
