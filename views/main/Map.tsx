import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../../services/styleSheet';

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Map</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: containerStyle,
});
