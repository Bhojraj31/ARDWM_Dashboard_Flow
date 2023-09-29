import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const CustomTopNav = () => {
    const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()
    return (
        <View style={styles.row} >
            <TouchableOpacity onPress={
                () => {
                    navigation.navigate('Portfolio')
                }
            }
                style={styles.touchable}
            >
                <Image source={require('../../assets/images/logo.png')} style={{ width: 25, height: 20, tintColor: 'grey' }} />
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
                <Image source={require('../../assets/images/Activity.png')} style={{ width: 20, height: 20, tintColor: 'grey', margin: 3 }} />
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
                <Image source={require('../../assets/images/Transact.png')} style={{ width: 25, height: 22, tintColor: 'grey' }} />
                <Text style={styles.text} >
                    Transact
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomTopNav

const styles = StyleSheet.create({
    row: {
        flex: 1,
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
        alignItems: 'center',
        padding:10,
    },
    text: {
        color: 'grey',
        fontSize: 16
    },
})