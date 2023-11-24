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
import CustomCard from '../components/CustomCard';
import StartApp from '../screens/StartApp';

const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName=''>
        <Stack.Screen
          name='Home'
          component={Home}
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
          name='StartApp'
          component={StartApp}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="StartApp" />
            ),
          })}
        />
      </Stack.Navigator>



    </NavigationContainer>
  )
}

export default AppNavigator
