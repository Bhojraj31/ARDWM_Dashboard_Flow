import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { IconButton, ActivityIndicator } from 'react-native-paper';

interface CustomHeaderProps {
    navigation: any;
    title: string;
}

const DrawerHeader: React.FC<CustomHeaderProps> = ({ navigation, title }) => {
    const { openDrawer } = navigation;

    const [refreshing, setRefreshing] = useState(false);

    const handleRefreshPress = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 2000); 
    };

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#000' }}>
            <View style={{ width: '75%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={openDrawer}>
                    <IconButton icon="menu" size={30} iconColor='#00BFFF' />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
                    {title}
                </Text>
            </View>

            <View style={{ paddingRight: 10, flexDirection: 'row' }}>
                {refreshing ? (
                    <ActivityIndicator animating={true} color='#00BFFF' size={18} style={{margin: null, marginRight:10}}/>
                ) : (
                    <TouchableOpacity onPress={handleRefreshPress}>
                        <IconButton icon="refresh" size={25} iconColor='#00BFFF' style={{ margin: null}} />
                    </TouchableOpacity>
                )}
                <TouchableOpacity onPress={openDrawer}>
                    <IconButton icon="account-group" size={20} iconColor='#fff' style={{ margin: null, borderRadius: 50, backgroundColor: '#00BFFF' }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DrawerHeader;
