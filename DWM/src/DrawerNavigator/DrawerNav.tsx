import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'
import Main from './Main'
import ContactUs from './ContactUs'
import About from './About'

const Drawer = createDrawerNavigator()
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
      <Drawer.Screen name='Dashboard' component={Main} options={{
        headerTitle: 'Bhojraj Wealth Strategy',
        headerStyle: {
          backgroundColor: 'black', 
        },
        headerTintColor: 'white', 
      }} />
      {/* <Drawer.Screen name='About' component={About} /> */}
      {/* <Drawer.Screen name='ContactUs' component={ContactUs} /> */}
    </Drawer.Navigator>
  )
}

export default DrawerNav
