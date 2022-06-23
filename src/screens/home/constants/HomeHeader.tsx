import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/colors';

const Header = () => {
  return (
    <View
      style={{
        height: 80,
        paddingHorizontal: 20,
        backgroundColor: colors.lightGray,
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 22}}>Home Page</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
