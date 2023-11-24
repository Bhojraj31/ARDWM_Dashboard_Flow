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
            <TouchableOpacity onPress={() => { navigation.navigate('Portfolio') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, }}>
                <Image source={require('../../assets/images/logo.png')} style={{ width: 25, height: 20, tintColor: text }} />
                <Text style={{ color: text, fontSize: 16 }}>Portfolio</Text>
            </TouchableOpacity >

            <View style={{ borderRightWidth: 1, borderColor: text }}></View>

            <TouchableOpacity onPress={() => { navigation.navigate('Activity') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, }}>
                <Image source={require('../../assets/images/Activity.png')} style={{ width: 20, height: 20, tintColor: text, margin: 3 }} />
                <Text style={{ color: text, fontSize: 16 }} > Activity </Text>
            </TouchableOpacity >

            <View style={{ borderRightWidth: 1, borderColor: text }}></View>

            <TouchableOpacity onPress={() => { navigation.navigate('Transact') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, }}>
                <Image source={require('../../assets/images/Transact.png')} style={{ width: 25, height: 22, tintColor: text }} />
                <Text style={{ color: text, fontSize: 16 }} > Transact </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomTopNav

const styles = StyleSheet.create({
})