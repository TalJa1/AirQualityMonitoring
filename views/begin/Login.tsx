/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, containerStyle, vh, vw} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBarCustom';
import {LoginBtnProps} from '../../services/typeProps';

const Login = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: vw(5)}}>
        <View>
          <BtnLayout title="Sign In" btnColor="#3E3792" textColor="white" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const BtnLayout: React.FC<LoginBtnProps> = ({
  btnColor,
  textColor,
  title,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[
        {backgroundColor: btnColor, borderRadius: 44, paddingVertical: vh(1)},
        centerAll,
      ]}>
      <Text style={{fontSize: 20, fontWeight: 700, color: textColor}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: containerStyle,
});
