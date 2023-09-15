import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'
import Main from './Main'
// import About from './About'
import ContactUs from './ContactUs'

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
      <Drawer.Screen name='Main' component={Main} options={{
        headerTitle: 'Bhojraj Singh Shekhawat',
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
