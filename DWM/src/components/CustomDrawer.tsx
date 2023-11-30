/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Custom Drawer
 * @Type:- Functional Component
 * @Role:- For showing Custom Drawer
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { IconButton } from 'react-native-paper'
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
// import { background, deepskyblue } from '../assets/constants/ColorConstants';
import { useTheme } from '../theme/ThemeProvider';
import { lightTheme } from '../theme/Themes';


const CustomDrawer = (props: any) => {

    const { theme, toggleTheme } = useTheme(); // Get the current theme and toggle function
    const { drawerBackground, text, label } = theme.colors;

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const progress = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(progress.value, [0, 100], [0, 0]),
                },
            ],
        };
    });

    return (
        <Animated.View style={[animatedStyle, { flex: 1 }]} >
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ flex: 1, backgroundColor: drawerBackground }}
            >
                {/* Drawer Screens */}
                <View style={{ flex: 1, paddingTop: 10 }}>
                    <DrawerItemList {...props} />

                    {/* theme toggle button here*/}
                    <View style={{ width: 120, alignItems: 'center', flexDirection: 'row', marginLeft: 18, marginVertical: 15 }}>
                        <Text style={{ color: text, fontSize: 17, }}>
                            {theme == lightTheme ? 'Dark' : 'Light'} Theme
                        </Text>
                        <TouchableOpacity onPress={toggleTheme}>
                            <IconButton
                                icon={theme == lightTheme ? 'weather-night' : 'white-balance-sunny'} // Replace 'moon' and 'sunny' with appropriate icons
                                size={30}
                                style={{ margin: 0 }}
                                iconColor={theme == lightTheme ? text : 'white'}
                            />
                        </TouchableOpacity>
                        {/* <Switch
                            trackColor={{ false: '#767577', true: '#fff' }}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ marginLeft: 20 }}
                        /> */}
                    </View>

                    {/* Logout button here*/}
                    <TouchableOpacity style={{ width: 200, marginLeft: 18, marginVertical: 15 }}>
                        <Text style={{ color: text, fontSize: 17, }}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Privacy Policy */}
                <TouchableOpacity style={{ width: 140, alignItems: 'center', marginLeft: 10, marginBottom: 15 }}>
                    <Text style={{ color: label, fontSize: 20, fontWeight: '600', textDecorationLine: "underline" }}>
                        Privacy Policy
                    </Text>
                </TouchableOpacity>

                {/* Border Line */}
                <View style={{ marginHorizontal: 10, marginBottom: 0, borderTopWidth: .3, borderColor: text }}></View>

                {/* pofile section */}
                <View style={{ flex: .3, padding: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        {/* left */}
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            {/* User IMG */}
                            <Image source={require('../assets/images/User.png')} style={{ width: 60, height: 60, }} />

                            {/* Phone Icon */}
                            <IconButton icon="phone" size={25} style={{ margin: 0, marginLeft: 20 }} iconColor={label} />
                        </View>

                        {/* right */}
                        <View style={{ marginLeft: 15 }}>
                            {/* Text */}
                            <Text style={{ color: text, fontSize: 17 }}>
                                Wealth Partner
                            </Text>
                            {/* User's Name */}
                            <Text style={{ color: text, fontSize: 18 }}>
                                Ketan K Mistry
                            </Text>

                            {/* User's Phone no. */}
                            <View>
                                <Text style={{ color: text, fontSize: 21, marginTop: '15%' }}>
                                    1000002777
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '4%' }}>
                        {/* App version */}
                        <Text style={{ color: text, fontSize: 15, alignSelf: 'center' }}>
                            App version
                        </Text>

                        {/* App version */}
                        <Text style={{ color: text, fontSize: 15, marginLeft: 30 }}>
                            v26.1
                        </Text>
                    </View>
                </View>
            </DrawerContentScrollView>

        </Animated.View>

    )
}

export default CustomDrawer

const styles = StyleSheet.create({})