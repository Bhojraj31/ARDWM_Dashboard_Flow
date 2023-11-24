import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../../components/CustomCard'

const DashboardScreen3 = () => {
    return (
        <CustomCard
            title='Short Term Portfolio'
            currentValue='6.61L'
            investment='6.04L'
            returnRate='72.22K'
            returnRate1='(5.56%p.a)'
            EMP=''
            date='15 Aug 2023'
        />
    )
}

export default DashboardScreen3

const styles = StyleSheet.create({})