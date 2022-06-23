import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const ProductHeader = () => {
  let navigation = useNavigation();

  return (
    <View
      style={{
        height: 80,
        paddingHorizontal: 20,
        backgroundColor: colors.lightGray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{fontSize: 22}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductHeader;

const styles = StyleSheet.create({});
