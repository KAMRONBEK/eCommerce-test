import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {requests} from '../../../api/requests';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {addItems} from '../../../store/actions/basket';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../../constants/colors';
import {windowWidth} from '../../../constants/size';

const ProductScreen = () => {
  let navigation = useNavigation();

  const dispatch = useDispatch();

  let items = useRoute().params?.item;

  const addItem = (item?: any) => {
    dispatch(addItems(item));
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
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
          <Text style={{fontSize: 22}}>Home Page</Text>
        </View>

        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 20,
              marginVertical: 10,
            }}>
            <Image
              source={{uri: `${items?.img}`}}
              resizeMode="contain"
              style={{height: 200}}
            />
            <Text style={styles.text}>ID: {items?.id}</Text>
            <Text style={styles.text}>Name: {items?.name}</Text>
            <Text style={styles.text}>Color: {items?.colour}</Text>
            <Text style={styles.text}>Price: {items?.price}</Text>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => addItem(items)}
                style={{
                  backgroundColor: colors.blackOpacity,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}>
                <Text>Add to Basket</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
    width: windowWidth / 1 - 100,
    lineHeight: 25,
  },
});
