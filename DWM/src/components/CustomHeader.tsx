import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { IconButton } from 'react-native-paper';

interface CustomHeaderProps {
    navigation: any;
    title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation, title }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#000' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IconButton icon="chevron-left" size={30} iconColor='#00BFFF' />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                {title}
            </Text>
        </View>
    );
};

export default CustomHeader;
