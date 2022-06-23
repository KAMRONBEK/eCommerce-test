import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { requests } from '../../../api/requests';
import { useFocusEffect, useRoute } from '@react-navigation/native';

const ProductScreen = () => {

  const dispatch = useDispatch();

  // LOAD PRODUCTS

  let {id} = useRoute().params?.item;

  // console.log(id);
  

  const loadProduct = async () => {
    try {
      let res = await requests.loadProduct.loadProduct(id);
      if (res) {
        
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadProduct();
    }, []),
  );





  return (
    <View>
      <Text>ProductScreen</Text>
    </View>
  )
}

export default ProductScreen;

const styles = StyleSheet.create({})