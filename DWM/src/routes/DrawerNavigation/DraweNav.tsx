import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text, View } from 'react-native'
import BottomNav from '../BottomNavigation/BottomNav'
import Profile from '../../screens/Profile'
import Dashboard from '../../screens/Dashboard'
import Activity from '../../screens/Activity';
import Transact from '../../screens/Transact';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
function DrawerNav() {
  return (
    <Drawer.Navigator
        screenOptions={{ 
          drawerStyle: {
            backgroundColor: 'black',
          },
          drawerLabelStyle: {
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
          }
        }}
      >
        <Drawer.Screen name='Dashboard' component={Dashboard} options={{
          headerTitle: 'Bhojraj Wealth Strategy',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }} />
        <Drawer.Screen name='Profile' component={Profile} options={{
          // headerTitle: 'Bhojraj Wealth Strategy',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }} />
      </Drawer.Navigator>
  )
}

export default DrawerNav
