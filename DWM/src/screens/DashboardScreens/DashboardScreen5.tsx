import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../../components/CustomCard'

const DashboardScreen5 = () => {
    return (
        <CustomCard
            title='Non-PP Structured Product'
            currentValue='-'
            investment='-'
            returnRate='-'
            returnRate1='-'
            EMP=''
            date='15 Aug 2023'
        />
    )
}

export default DashboardScreen5

const styles = StyleSheet.create({})