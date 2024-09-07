/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HeaderProps} from '../services/typeProps';
import {centerAll, vw} from '../services/styleSheet';
import {backIcon, headerRightIcon} from '../assets/svgXml';

const HeaderComponent: React.FC<HeaderProps> = ({isBack, title, subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {isBack && (
          <TouchableOpacity onPress={() => {}}>
            {backIcon(vw(7), vw(7))}
          </TouchableOpacity>
        )}
        <Text style={{color: '#3E3792', fontSize: 20, fontWeight: '700'}}>
          {title}
        </Text>
        {headerRightIcon(vw(7), vw(7))}
      </View>
      {subtitle && (
        <Text
          style={[
            {color: '#6E778B', fontSize: 14, fontWeight: '400'},
            centerAll,
          ]}>
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
