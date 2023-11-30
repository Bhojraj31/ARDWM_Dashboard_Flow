/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- DrawerNav
 * @Type:- Functional Component
 * @Role:- For showing DrawerNav
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React from 'react'
import BottomNav from '../BottomNavigation/BottomNav'
import Profile from '../../screens/DrawerNavScreen/Profile'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomHeader from '../../components/CustomHeader';
import Videos from '../../screens/DrawerNavScreen/Videos';
import Referral from '../../screens/DrawerNavScreen/Referral';
import Reports from '../../screens/DrawerNavScreen/Reports';
import DrawerHeader from '../../components/DrawerHeader';
import CustomDrawer from '../../components/CustomDrawer';
import { useTheme } from '../../theme/ThemeProvider';


const Drawer = createDrawerNavigator();
const Empty = () => {
  return (
    <BottomNav />
  )
}

function DrawerNav() {

  const { theme } = useTheme(); 
  const { text, drawerBackground } = theme.colors;

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: "slide",
        drawerActiveTintColor: drawerBackground,
        drawerLabelStyle: {
          fontSize: 16,
          color: text,
        }
      }}
    >
      <Drawer.Screen
        name='Dashboard'
        component={Empty}
        options={({ navigation }) => ({
          header: () => (
            <DrawerHeader navigation={navigation} title="Bhojraj Wealth Strategy" />
          ),
        })}
      />
      <Drawer.Screen
        name='Profile'
        component={Profile}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader navigation={navigation} title="Profile" />
          ),
        })}
      />
      <Drawer.Screen
        name='Videos'
        component={Videos}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader navigation={navigation} title="Videos" />
          ),
        })}
      />
      <Drawer.Screen
        name='Referral'
        component={Referral}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader navigation={navigation} title="Referral" />
          ),
        })}
      />
      <Drawer.Screen
        name='Reports'
        component={Reports}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader navigation={navigation} title="Reports" />
          ),
        })}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNav
