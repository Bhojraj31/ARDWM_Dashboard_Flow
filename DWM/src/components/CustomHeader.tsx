/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Custom Header
 * @Type:- Functional Component
 * @Role:- For showing Custom Header
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useTheme } from '../theme/ThemeProvider';

interface CustomHeaderProps {
    navigation: any;
    title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation, title }) => {

    const { theme } = useTheme();
    const { label, button, background } = theme.colors;
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: background }}>
            <TouchableOpacity style={{ flex: .1 }} onPress={() => navigation.goBack()}>
                <IconButton icon="chevron-left" size={30} iconColor={button} />
            </TouchableOpacity>
            <View style={{ flex: .8, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: label, fontWeight: 'bold', fontSize: 18 }}>
                    {title}
                </Text>
            </View>
        </View>
    );
};

export default CustomHeader;
