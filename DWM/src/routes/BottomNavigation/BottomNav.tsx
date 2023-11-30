/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- BottomNav
 * @Type:- Functional Component
 * @Role:- For showing BottomNav
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconButton } from 'react-native-paper';
import Strategy from '../../screens/BottomNavScreen/Strategy';
import Dashboard from '../../screens/BottomNavScreen/Dashboard';
import Messages from '../../screens/BottomNavScreen/Messages';
import { useTheme } from '../../theme/ThemeProvider';

const Bottom = createBottomTabNavigator();

const BottomNav = () => {

  const { theme } = useTheme();
  const { text, background, label, activeTabTintColor, InactiveTintColor } = theme.colors;
  const ActiveColor = activeTabTintColor;
  const InactiveColor = InactiveTintColor;
  return (
    <Bottom.Navigator
      initialRouteName='Main'
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 13,
          // color: label,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: background,
          padding: 8
        },
        tabBarActiveTintColor: activeTabTintColor,
        tabBarInactiveTintColor: InactiveTintColor
      }}>
      <Bottom.Screen
        name='Strategy'
        component={Strategy}
        // options={({ navigation }) => ({
        //   header: () => (
        //     <CustomHeader navigation={navigation} title="Strategy" />
        //   ),
        //   tabBarLabel: 'Strategy',
        //   tabBarIcon: () => (
        //     <IconButton icon="chess-knight" size={25} iconColor="white" />
        //   ),
        // })}
        options={{
          headerShown: false,
          tabBarLabel: 'Strategy',
          tabBarIcon: ({ focused, color }) => (
            <IconButton icon="chess-knight" size={25} iconColor={focused ? ActiveColor : InactiveColor} />
          ),
        }}
      />
      <Bottom.Screen
        name='Main'
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ focused, color }) => (
            <IconButton icon="speedometer" size={25} iconColor={focused ? ActiveColor : InactiveColor} />
          ),
        }}
      />
      <Bottom.Screen
        name='Messages'
        component={Messages}
        options={{
          headerShown: false,
          tabBarLabel: 'Messages',
          tabBarIcon: ({ focused, color }) => (
            <IconButton icon="wechat" size={25} iconColor={focused ? ActiveColor : InactiveColor} />
          ),
        }}
      />
    </Bottom.Navigator>


  )
}

export default BottomNav

const styles = StyleSheet.create({})