/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HeaderProps} from '../services/typeProps';
import {vh, vw} from '../services/styleSheet';
import {backIcon, headerRightIcon} from '../assets/svgXml';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HeaderComponent: React.FC<HeaderProps> = ({isBack, title, subtitle}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: vh(1),
        }}>
        <View>
          <TouchableOpacity
            disabled={!isBack}
            onPress={() => {
              navigation.goBack();
            }}>
            {backIcon(vw(7), vw(7), isBack ? '#6E778B' : 'transparent')}
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: '#3E3792',
            fontSize: 20,
            fontWeight: '700',
          }}>
          {title}
        </Text>
        {headerRightIcon(vw(7), vw(7))}
      </View>
      {subtitle && (
        <Text
          style={{
            color: '#6E778B',
            fontSize: 14,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: vw(5),
  },
});
