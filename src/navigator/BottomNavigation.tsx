import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BasketScreen from '../screens/Basket/BasketScreen';
import HomeScreen from '../screens/home/HomeScreen';
import {colors} from '../constants/colors';
import {Routes} from '../routes/Router';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          bottom: 0,
          padding: 0,
          margin: 0,
          justifyContent: 'space-between',
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? colors.black : colors.white,
              }}>
              <Text
                style={[
                  styles.text,
                  {color: focused ? colors.white : colors.black},
                ]}>
                Home
              </Text>
            </View>
          ),
        }}
        name={Routes.Home}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? colors.black : colors.white,
              }}>
              <Text
                style={[
                  styles.text,
                  {color: focused ? colors.white : colors.black},
                ]}>
                Basket
              </Text>
            </View>
          ),
        }}
        name={Routes.Basket}
        component={BasketScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.black,
  },
});
