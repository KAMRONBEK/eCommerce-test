import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {requests} from '../../api/requests';
import {products} from '../../store/actions/products';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {windowHeight, windowWidth} from '../../constants/size';
import {Routes} from '../../routes/Router';
import Header from './constants/HomeHeader';

const HomeScreen = () => {
  let navigation = useNavigation();

  const dispatch = useDispatch();

  // LOAD PRODUCTS

  const loadProducts = async () => {
    try {
      let res = await requests.loadProducts.loadProducts();
      if (res) {
        dispatch(products(res.data));
        // console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadProducts();
    }, []),
  );

  const allProducts = useSelector(state => state.products.allProducts);

  // console.log(allProducts);

  // END

  const openProduct = (item?: any) => {
    //@ts-ignore
    navigation.navigate(Routes.Product, {item});
    // console.log(item);
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <Header />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allProducts}
          numColumns={1}
          style={{height: windowHeight / 1 - 80}}
          contentContainerStyle={{paddingVertical: 20, paddingBottom: 180}}
          // extraData={selectedId}
          keyExtractor={item => item?.id.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={{paddingHorizontal: 20}}>
                <TouchableOpacity onPress={() => openProduct(item)}>
                  <View
                    style={{
                      paddingHorizontal: 20,
                      paddingVertical: 20,
                      marginVertical: 10,
                      borderWidth: 1,
                    }}>
                    <Image
                      source={{uri: `${item?.img}`}}
                      resizeMode="contain"
                      style={{height: 200}}
                    />
                    <Text style={styles.text}>ID: {item?.id}</Text>
                    <Text style={styles.text}>Name: {item?.name}</Text>
                    <Text style={styles.text}>Color: {item?.colour}</Text>
                    <Text style={styles.text}>Price: {item?.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
    width: windowWidth / 1 - 100,
    lineHeight: 25,
  },
});
