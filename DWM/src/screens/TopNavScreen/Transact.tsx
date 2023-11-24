import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../theme/ThemeProvider';

const Transact = () => {

  const { theme } = useTheme();
  const { background, label, } = theme.colors;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: background }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: label }} >Transact</Text>
    </View>
  )
}

export default Transact

const styles = StyleSheet.create({})