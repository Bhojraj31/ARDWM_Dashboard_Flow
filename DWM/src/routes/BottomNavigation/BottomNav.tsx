import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconButton } from 'react-native-paper';
import Strategy from '../../screens/Strategy';
import Dashboard from '../../screens/Dashboard';
import Messages from '../../screens/Messages';

const Bottom = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Bottom.Navigator
      initialRouteName='Dashboard'
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
      <Bottom.Screen name='Strategy' component={Strategy} options={{
        headerShown: false,
        tabBarLabel: 'Strategy',
        tabBarIcon: ({ color, size }) => (
          <IconButton icon="chess-knight" size={30} iconColor="white" />
        ),
      }} />
      <Bottom.Screen name='Dashboard' component={Dashboard} options={{
        // headerShown: false,
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <IconButton icon="speedometer" size={30} iconColor="white" />
        ),
      }} />
      <Bottom.Screen name='Messages' component={Messages} options={{
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