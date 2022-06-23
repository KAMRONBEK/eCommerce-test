import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {colors} from '../../../constants/colors';
import {clearAllItems} from '../../../store/actions/basket';

const BasketHeader = () => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        height: 80,
        paddingHorizontal: 20,
        backgroundColor: colors.lightGray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 22}}>Basket Page</Text>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity
          onPress={() => dispatch(clearAllItems())}
          style={{
            backgroundColor: colors.white,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          <Text>Clear Basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketHeader;

const styles = StyleSheet.create({});
