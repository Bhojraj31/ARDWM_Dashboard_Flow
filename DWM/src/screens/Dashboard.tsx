import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Carousels from '../carousels/Carousels'

const Dashboard = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()
  return (
    <View style={{ flex: 1, backgroundColor: 'black', }}>
      {/* Custom Top Tab Navigation */}
      <View style={styles.row} >
        <TouchableOpacity onPress={
          () => {
            navigation.navigate('Portfolio')
          }
        }
          style={styles.touchable}
        >
          <Image source={require('../assets/images/logo.png')} style={{ width: 37, height: 37, tintColor: 'grey' }} />
          <Text style={styles.text} >
            Portfolio
          </Text>
        </TouchableOpacity >

        <View style={{ borderRightWidth: 1, borderColor: 'grey' }}></View>

        <TouchableOpacity onPress={
          () => {
            navigation.navigate('Activity')
          }
        } style={styles.touchable}>
          <Image source={require('../assets/images/Activity.png')} style={{ width: 25, height: 25, tintColor: 'grey', margin: 3 }} />
          <Text style={styles.text} >
            Activity
          </Text>
        </TouchableOpacity >
        <View style={{ borderRightWidth: 1, borderColor: 'grey' }}></View>

        <TouchableOpacity onPress={
          () => {
            navigation.navigate('Transact')
          }
        } style={styles.touchable}>
          <Image source={require('../assets/images/Transact.png')} style={{ width: 30, height: 30, tintColor: 'grey' }} />
          <Text style={styles.text} >
            Transact
          </Text>
        </TouchableOpacity>
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
