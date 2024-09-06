import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBarCustom';

const Login = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Login</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: containerStyle,
});
