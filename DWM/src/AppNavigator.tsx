import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './normalNavigator/Home';
import Dashboard from './normalNavigator/Dashboard';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name='Dashboard'
          options={{ headerShown: false }}
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator