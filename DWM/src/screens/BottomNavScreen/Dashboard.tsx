/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Dashboard
 * @Type:- Functional Component
 * @Role:- For showing Dashboard
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, View } from 'react-native'
import React from 'react'
import Carousels from '../../components/Carousels'
import CustomTopNav from '../../routes/TopNavigation/CustomTopNav'
import { useTheme } from '../../theme/ThemeProvider'

const Dashboard = () => {

  const { theme } = useTheme();
  const {background } = theme.colors;
  return (
    <View style={{ flex: 1, backgroundColor: background, }}>

      {/* Custom Top Tab Navigation */}
      <View style={{ flex: .09 }}>
        <CustomTopNav />
      </View>

      {/* Carousels here */}
      <View style={{ flex: .9, }} >
        <Carousels />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  
})

export default Dashboard
