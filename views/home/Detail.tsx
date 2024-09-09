import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../../services/styleSheet';
import HeaderComponent from '../../components/HeaderComponent';
import {useRoute} from '@react-navigation/native';

const Detail = () => {
  const route = useRoute();
  const {subTitle} = route.params as {subTitle: string};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderComponent title="Detail" isBack={true} subtitle={subTitle} />
        <View>
          <Text>Detail</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: containerStyle,
});
