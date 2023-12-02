/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Custom Drawer Header
 * @Type:- Functional Component
 * @Role:- For showing Custom Drawer Header
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { IconButton, ActivityIndicator } from 'react-native-paper';
import { useTheme } from '../theme/ThemeProvider';

// ------ CustomHeaderProps for passing values's to the child ------
interface CustomHeaderProps {
    navigation: any;
    title: string;
}
// ------ React Native Funcational Export Component with styles------
const CustomDrawerHeader: React.FC<CustomHeaderProps> = ({ navigation, title }) => {
    const { openDrawer } = navigation;
    // ------ Used Theme Here ------
    const { theme } = useTheme();
    const { label, button, background } = theme.colors;
    // ------ State for refreshing ------
    const [refreshing, setRefreshing] = useState(false);
    // ------ Method for refreshing ------
    const handleRefreshPress = () => {
        setRefreshing(true);
        // ------ setTimeout for Trefreshing ------
        setTimeout(() => {
            setRefreshing(false);
        }, 3000);
    };
    // ------ Return react native component here ------
    return (
        // ------ Parent View Of this component  ------
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: background }}>
            <View style={{ width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* ------ menu button for open drawer  ------ */}
                <TouchableOpacity onPress={openDrawer}>
                    <IconButton icon="menu" size={25} iconColor={button} />
                </TouchableOpacity>
                {/* ------ title for Drawer Heder  ------ */}
                <Text style={{ color: label, fontWeight: 'bold', fontSize: 19 }}>
                    {title}
                </Text>
            </View>

            {/* ------ refreshing here ------ */}
            <View style={{ paddingRight: 0, width: '30%', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                {refreshing ? (
                    <ActivityIndicator animating={true} color={button} size={20} style={{ margin: null, }} />
                ) : (
                    <TouchableOpacity onPress={handleRefreshPress}>
                        <IconButton icon="refresh" size={25} iconColor={button} style={{ margin: null }} />
                    </TouchableOpacity>
                )}
                {/* ------ Right side drawer button for Family member   ------ */}
                <TouchableOpacity onPress={openDrawer}>
                    <IconButton icon="account-group" size={18} iconColor='#fff' style={{ margin: null, borderRadius: 50, backgroundColor: button }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawerHeader;
