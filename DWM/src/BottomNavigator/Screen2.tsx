import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNav from '../topNavigator/TopNav'
import Carousels from '../carousels/Carousels'

const Screen2 = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TopNav />
      </View>
      {/* <View style={{ flex: 1 }}>
        <Carousels />
      </View> */}
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({})