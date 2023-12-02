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
import CustomCarousels from '../../components/CustomCarousels'
import CustomTopNav from '../../routes/TopNavigation/CustomTopNav'
import { useTheme } from '../../theme/ThemeProvider'

// ------ React Native Funcational Export Component with styles ------
const Dashboard = () => {
  // ------ Used Theme Here ------
  const { theme } = useTheme();
  const { background } = theme.colors;
  // ------ Return react native component here ------
  return (
    // ------ Parent View Of this component  ------
    <View style={{ flex: 1, backgroundColor: background, }}>
      {/* ------ Custom Top Tab Navigation View here ------ */}
      <View style={{ flex: .09 }}>
        <CustomTopNav />
      </View>

      {/* ------ Carousels View here ------ */}
      <View style={{ flex: .9, }} >
        <CustomCarousels />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

})

export default Dashboard
