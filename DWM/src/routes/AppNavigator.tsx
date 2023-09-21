import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Home from '../screens/Home';
import DrawerNav from './DrawerNavigation/DraweNav';
import Profile from '../screens/Profile';
import Activity from '../screens/Activity';
import Transact from '../screens/Transact';
import BottomNav from './BottomNavigation/BottomNav';

import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from '../screens/Dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartApp from '../screens/StartApp';
import Portfolio from '../screens/Portfolio';

const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name='StartApp'
          component={StartApp}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
        />
        <Stack.Screen
          name='Portfolio'
          component={Portfolio}
        />
        <Stack.Screen
          name='Activity'
          component={Activity}
        />
        <Stack.Screen
          name='Transact'
          component={Transact}
        />
      </Stack.Navigator>



    </NavigationContainer>
  )
}

export default AppNavigator
