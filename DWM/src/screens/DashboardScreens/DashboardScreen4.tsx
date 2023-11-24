import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../../components/CustomCard'

const DashboardScreen4 = () => {
    return (
        <CustomCard
            title='Tax Portfolio'
            currentValue='-'
            investment='-'
            returnRate='-'
            returnRate1='-'
            EMP=''
            date='15 Aug 2023'
        />
    )
}

export default DashboardScreen4

const styles = StyleSheet.create({})