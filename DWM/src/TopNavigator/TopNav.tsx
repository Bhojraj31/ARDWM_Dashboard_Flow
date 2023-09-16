import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Portfolio from './Portfolio';
import Activity from './Activity';
import Transact from './Transact';
import { IconButton } from 'react-native-paper';

const Top = createMaterialTopTabNavigator();

const TopNav = () => {
    return (
        <Top.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 15,
                    color: 'white',
                    fontWeight: 'bold',
                },
                tabBarStyle: {
                    backgroundColor: 'black',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: 'grey', 
                },
                tabBarIconStyle: {
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }}
        >
            <Top.Screen name='Portfolio' component={Portfolio} options={{
                tabBarLabel: 'Portfolio',
                tabBarIcon: ({ color, focused }) => (
                    <IconButton icon="chart-arc" focusable={focused} size={30} iconColor="white" />
                ),
            }} />
            <Top.Screen name='Activity' component={Activity} options={{
                tabBarLabel: 'Activity',
                tabBarIcon: ({ color, focused }) => (
                    <IconButton icon="progress-clock" focusable={focused} size={30} iconColor="white" />
                ),
            }} />
            <Top.Screen name='Transact' component={Transact} options={{
                tabBarLabel: 'Transact',
                tabBarIcon: ({ color, focused }) => (
                    <IconButton icon="bitcoin" focusable={focused} size={30} iconColor="white" />
                ),
            }} />
        </Top.Navigator>
    )
}

export default TopNav

const styles = StyleSheet.create({})