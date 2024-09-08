import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {containerStyle} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBarCustom';

const Rank = () => {
  useStatusBar('white');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Rank</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rank;

const styles = StyleSheet.create({
  container: containerStyle,
});
