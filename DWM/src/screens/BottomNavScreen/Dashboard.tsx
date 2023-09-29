import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Carousels from '../../components/Carousels'
import CustomTopNav from '../../routes/TopNavigation/CustomTopNav'

const Dashboard = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()
  return (
    <View style={{ flex: 1, backgroundColor: 'black', }}>

      {/* Custom Top Tab Navigation */}
      <View style={{flex:.07}}>
        <CustomTopNav />
      </View>

      {/* Carousels here */}
      <View style={{ flex: .9, justifyContent: 'center', alignItems: 'center' }} >
        <Carousels />
      </View>
    </View>
    // <DrawerNav/>
  )
}

// Add a custom header with an icon
Dashboard.navigationOptions = {
  headerTitle: 'Dashboard',
  headerRight: () => (
    <TouchableOpacity
      onPress={() => {
        // Handle the action when the icon is pressed
      }}
    >
      <IconButton icon="menu" size={25} iconColor="white" />
    </TouchableOpacity>
  ),
};


{/* Custom Top Tab Navigation styling */ }

const styles = StyleSheet.create({
  row: {
    flex: .08,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: .2,
    borderBottomWidth: 1,
    borderColor: "grey",
    padding: 5
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'grey',
    fontSize: 15
  },
})

export default Dashboard
