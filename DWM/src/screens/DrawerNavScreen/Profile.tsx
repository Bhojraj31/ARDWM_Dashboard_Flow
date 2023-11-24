import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../theme/ThemeProvider';

const Profile = () => {
  
  const { theme } = useTheme();
  const { label, background } = theme.colors;
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: background}}>
      <Text style={{fontSize:30, color:label}}>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})