import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen1 from './Screen1';
import Screen3 from './Screen3';
import Screen2 from './Screen2';
import { IconButton } from 'react-native-paper';

const Bottom = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Bottom.Navigator
      initialRouteName='Screen2'
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
          color: 'white',
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: 'black', 
          padding: 8
        },
      }}>
      <Bottom.Screen name='Screen1' component={Screen1} options={{
        headerShown: false,
        tabBarLabel: 'Strategy',
        tabBarIcon: ({ color, size }) => (
          <IconButton icon="chess-knight" size={30} iconColor="white" />
        ),
      }} />
      <Bottom.Screen name='Screen2' component={Screen2} options={{
        headerShown: false,
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <IconButton icon="speedometer" size={30} iconColor="white" />
        ),
      }} />
      <Bottom.Screen name='Screen3' component={Screen3} options={{
        headerShown: false,
        tabBarLabel: 'Messages',
        tabBarIcon: ({ color, size }) => (
          <IconButton icon="wechat" size={30} iconColor="white" />
        ),
      }} />
    </Bottom.Navigator>
  )
}

export default BottomNav

const styles = StyleSheet.create({})