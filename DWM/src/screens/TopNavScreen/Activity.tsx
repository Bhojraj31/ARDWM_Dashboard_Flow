import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../theme/ThemeProvider';

const Activity = () => {

  const { theme } = useTheme();
  const { background, label, } = theme.colors;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: background }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: label }} >Activity</Text>
    </View>
  )
}

export default Activity

const styles = StyleSheet.create({})