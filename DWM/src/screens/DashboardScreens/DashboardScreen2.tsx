import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../../components/CustomCard'
import CircularSlideGraph from '../../components/CircularSliderGraph'

const DashboardScreen2 = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: .6 }}>
                <CustomCard
                    title='Todays Wealth'
                    currentValue='73.6L'
                    investment='52.25L'
                    returnRate='36.62L'
                    returnRate1='(11.0%p.a)'
                    EMP='+ Equity Market Protection :-'
                    date='15 Aug 2023'
                />
            </View>
            <View style={{ alignSelf: 'center' }}>
                <CircularSlideGraph />
            </View>
        </View>
    )
}

export default DashboardScreen2

const styles = StyleSheet.create({})