import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from '../routes/BottomNavigation/BottomNav'
import DrawerNav from '../routes/DrawerNavigation/DraweNav'

const StartApp = () => {
  return (
    <View style={{flex:1}} >      
        {/* <BottomNav/> */}
        <DrawerNav/>
    </View>
  )
}

export default StartApp

const styles = StyleSheet.create({})