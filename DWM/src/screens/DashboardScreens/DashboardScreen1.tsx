import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../../components/CustomCard'

const DashboardScreen1 = () => {
    return (
        <CustomCard
            title='Total Portfolio'
            currentValue='80.21L'
            investment='58.29L'
            returnRate='37.34L'
            returnRate1='(10.81%p.a)'
            EMP='+ Equity Market Protection :-'
            date='15 Aug 2023'
        />
    )
}

export default DashboardScreen1

const styles = StyleSheet.create({})