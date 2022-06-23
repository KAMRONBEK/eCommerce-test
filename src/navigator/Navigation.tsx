import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../routes/Router';
import HomeScreen from '../screens/home/HomeScreen';
import BasketScreen from '../screens/Basket/BasketScreen';
import BottomNavigation from './BottomNavigation';
import ProductScreen from '../screens/home/Moduls/ProductScreen';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
              headerShown: false,
            }}>
        <Stack.Screen name={Routes.BottomNavigation} component={BottomNavigation} />
        <Stack.Screen name={Routes.Home} component={HomeScreen} />
        <Stack.Screen name={Routes.Basket} component={BasketScreen} />
        <Stack.Screen name={Routes.Product} component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})