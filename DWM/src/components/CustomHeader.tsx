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
