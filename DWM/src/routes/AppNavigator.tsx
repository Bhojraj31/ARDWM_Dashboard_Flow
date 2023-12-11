/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- AppNavigation
 * @Type:- Functional Component
 * @Role:- For showing Root Stack navigation
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Home from '../screens/Home';
import DrawerNav from './DrawerNavigation/DraweNav';
import Profile from '../screens/DrawerNavScreen/Profile';
import Activity from '../screens/TopNavScreen/Activity';
import Transact from '../screens/TopNavScreen/Transact';
import BottomNav from './BottomNavigation/BottomNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Portfolio from '../screens/TopNavScreen/Portfolio';
import CustomHeader from '../components/CustomHeader';
import Registration from '../screens/TopNavScreen/Registration';
import StrategyDetails from '../screens/BottomNavScreen/StrategyDetails';
import RightDrawerNav from './DrawerNavigation/RightDrawerNav';
import Invest from '../screens/TopNavScreen/TransactScreens/Invest';
import Switch from '../screens/TopNavScreen/TransactScreens/Switch';
import Withdraw from '../screens/TopNavScreen/TransactScreens/Withdraw';
import SwitchDetails from '../screens/TopNavScreen/TransactScreens/SwitchScreens/SwitchDetails';

const Stack = createNativeStackNavigator();
// ------ React Native Funcational Export Component with styles------
function AppNavigator() {
  // ------ Return react native component here ------
  return (
    // ------ NavigationContainer here ------
    <NavigationContainer>
      {/* ------ Stack navigation here ------ */}
      <Stack.Navigator initialRouteName='Home'>
        {/* ------ Bottom Tab navigation Screens here ------ */}
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='RightDrawerNav'
          component={RightDrawerNav}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='DrawerNav'
          component={DrawerNav}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='BottomNav'
          component={BottomNav}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Profile" />
            ),
          })}
        />
        <Stack.Screen
          name='Portfolio'
          component={Portfolio}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Portfolio" />
            ),
          })}
        />
        <Stack.Screen
          name='Activity'
          component={Activity}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Activity" />
            ),
          })}
        />
        <Stack.Screen
          name='Transact'
          component={Transact}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Transact" />
            ),
          })}
        />
        <Stack.Screen
          name='Registration'
          component={Registration}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Registration" />
            ),
          })}
        />
        <Stack.Screen
          name='Invest'
          component={Invest}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Invest" />
            ),
          })}
        />
        <Stack.Screen
          name='Switch'
          component={Switch}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Switch" />
            ),
          })}
        />
        <Stack.Screen
          name='Withdraw'
          component={Withdraw}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Withdraw" />
            ),
          })}
        />
        <Stack.Screen
          name='SwitchDetails'
          component={SwitchDetails}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="SwitchDetails" />
            ),
          })}
        />
        <Stack.Screen
          name='StrategyDetails'
          component={StrategyDetails}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Set Wealth Target" />
            ),
          })}
        />
      </Stack.Navigator>



    </NavigationContainer>
  )
}

export default AppNavigator
