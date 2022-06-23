import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../constants/colors';
import {windowHeight, windowWidth} from '../../constants/size';
import {clearAllItems, removeItem} from '../../store/actions/basket';

const BasketScreen = () => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  let qtyPlus = () => {
    if (quantity >= 0) {
      setQuantity(quantity + 1);
    } else null;
  };

  let qtyMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else null;
  };

  const allBasketProducts = useSelector(state => state.basket.basket_products);

  let removeProduct = (id?: any) => {
    dispatch(removeItem(id));
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
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allBasketProducts}
          numColumns={1}
          style={{height: windowHeight / 1 - 80}}
          contentContainerStyle={{paddingVertical: 20, paddingBottom: 180}}
          // extraData={selectedId}
          keyExtractor={item => item?.id.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={{paddingHorizontal: 20}}>
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
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.btn} onPress={qtyMinus}>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={{paddingHorizontal: 10}}>
                      Quantity: 1
                    </Text>
                    <TouchableOpacity style={styles.btn} onPress={qtyPlus}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => removeProduct(item.id)}
                      style={{
                        backgroundColor: colors.blackOpacity,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                      }}>
                      <Text>Remove Product</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
    width: windowWidth / 1 - 100,
    lineHeight: 25,
  },

  btn: {
    height: 35,
    width: 35,
    backgroundColor: colors.blackOpacity,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
