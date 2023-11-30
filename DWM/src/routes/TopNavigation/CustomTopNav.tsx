/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Custom TopNav
 * @Type:- Functional Component
 * @Role:- For showing Custom TopNav
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useTheme } from '../../theme/ThemeProvider'

const CustomTopNav = () => {
    const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()

    const { theme } = useTheme();
    const { text } = theme.colors;

    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', borderTopWidth: .2, borderBottomWidth: 1, borderColor: "grey", padding: 5 }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Portfolio') }} style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: 10, }}>
                <Image source={require('../../assets/images/logo.png')} style={{ width: 30, height: 23, tintColor: text }} />
                <Text style={{ color: text, fontSize: 15 }}>Portfolio</Text>
            </TouchableOpacity >

            <View style={{ borderRightWidth: 1, borderColor: text }}></View>

            <TouchableOpacity onPress={() => { navigation.navigate('Activity') }} style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: 10, }}>
                <Image source={require('../../assets/images/Activity.png')} style={{ width: 19, height: 17, tintColor: text, margin: 3 }} />
                <Text style={{ color: text, fontSize: 15 }} > Activity </Text>
            </TouchableOpacity >

            <View style={{ borderRightWidth: 1, borderColor: text }}></View>

            <TouchableOpacity onPress={() => { navigation.navigate('Transact') }} style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: 10, }}>
                <Image source={require('../../assets/images/Transact.png')} style={{ width: 25, height: 22, tintColor: text }} />
                <Text style={{ color: text, fontSize: 15 }} > Transact </Text>
            </TouchableOpacity>

            <View style={{ borderRightWidth: 1, borderColor: text }}></View>

            <TouchableOpacity onPress={() => { navigation.navigate('Registration') }} style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: 10, }}>
                <Image source={require('../../assets/images/Registration.png')} style={{ width: 20, height: 22, tintColor: text }} />
                <Text style={{ color: text, fontSize: 14 }} > Registration </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomTopNav

const styles = StyleSheet.create({
})