import React from 'react'
import BottomNav from '../BottomNavigation/BottomNav'
import Profile from '../../screens/DrawerNavScreen/Profile'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomHeader from '../../components/CustomHeader';
import Logout from '../../screens/DrawerNavScreen/Logout';
import Videos from '../../screens/DrawerNavScreen/Videos';
import Referral from '../../screens/DrawerNavScreen/Referral';
import Reports from '../../screens/DrawerNavScreen/Reports';
import DrawerHeader from '../../components/DrawerHeader';


const Drawer = createDrawerNavigator();


const Empty = () => {
  return (
    <BottomNav />
  )
}

function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "slide",
        drawerStyle: {
          backgroundColor: 'black',
        },
        drawerLabelStyle: {
          fontSize: 17,
          color: 'white',
        }
      }}
    >
      <Drawer.Screen
        name='Dashboard'
        component={Empty}
        // options={{
        //   headerTitle: 'Bhojraj Wealth Strategy',
        //   headerStyle: {
        //     backgroundColor: 'black',
        //   },
        //   headerTintColor: 'blue',
        // }}
        options={({ navigation }) => ({
          header: () => (
            <DrawerHeader navigation={navigation} title="Bhojraj Wealth Stategy" />
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
      <Drawer.Screen
        name='Logout'
        component={Logout}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader navigation={navigation} title="Logout" />
          ),
        })}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNav
