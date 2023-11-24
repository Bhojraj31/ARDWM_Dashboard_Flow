import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { useTheme } from '../theme/ThemeProvider';

type CustomCardProps = {
    title: string;
    currentValue: string;
    investment: string;
    returnRate: string;
    returnRate1: string;
    EMP: string;
    date: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, currentValue, investment, returnRate, returnRate1, EMP, date, }:CustomCardProps) => {
    const { theme } = useTheme();
    const { button, label, text, cardBackground, background } = theme.colors;

    return (
        <View style={{ flex: 1, backgroundColor: background }}>
            {/* Card here */}
            <Card style={{ backgroundColor: cardBackground, borderRadius: 10 }}>
                {/* 1-Row */}
                <Card.Content style={{ alignItems: 'center' }}>
                    <Text style={{ color: label, fontSize: 18 }}>{title}</Text>
                    <Text style={{ color: label, fontSize: 28, marginTop: 10 }}>{currentValue}</Text>
                    <Text style={{ color: text, fontSize: 17 }}>Current Value</Text>
                </Card.Content>

                {/* 2-Row */}
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 2 }}>
                    <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>
                        <Text style={{ color: label, fontSize: 18 }}>{investment}</Text>
                    </View>
                    <TouchableOpacity style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ color: button, fontSize: 18 }}>{returnRate}</Text>
                        <Text style={{ color: button, fontSize: 14 }}>{returnRate1}</Text>
                    </TouchableOpacity>
                </Card.Content>

                {/* 3-Row */}
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 2 }}>
                    <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>
                        <Text style={{ color: text, fontSize: 18 }}>Investment</Text>
                    </View>
                    <TouchableOpacity style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ color: text, fontSize: 18 }}>Return All Time</Text>
                    </TouchableOpacity>
                </Card.Content>

                {/* 4-Row */}
                <Card.Content style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 2 }}>
                    <TouchableOpacity>
                        <Text style={{ color: button, fontSize: 18 }}>{EMP}</Text>
                    </TouchableOpacity>
                </Card.Content>

                {/* 5-Row */}
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 2 }}>
                    <TouchableOpacity>
                        <Text style={{ color: button, fontSize: 15 }}>Value as on : {date}</Text>
                    </TouchableOpacity>
                </Card.Content>
            </Card>
        </View>
    );
};

export default CustomCard;
