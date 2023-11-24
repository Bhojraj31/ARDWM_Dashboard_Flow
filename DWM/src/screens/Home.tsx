import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
// import { background, deepskyblue } from '../assets/constants/ColorConstants'
import { useTheme } from '../theme/ThemeProvider'
import { lightTheme } from '../theme/Themes'
import { IconButton } from 'react-native-paper'

function Home() {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()
  const { theme, toggleTheme } = useTheme(); // Get the current theme and toggle function
  const { label, background } = theme.colors;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: background }} >
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: label }} onPress={() => { navigation.navigate('DrawerNav') }}>
        Get Start
      </Text>

      <TouchableOpacity
        onPress={toggleTheme}
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, }}>
        <Text style={{ color: label }}>
          Switch to {theme == lightTheme ? 'Dark' : 'Light'} Mode
        </Text>
        <IconButton
          icon={theme == lightTheme ? 'white-balance-sunny' : 'weather-night'} // Replace 'moon' and 'sunny' with appropriate icons
          size={30}
          iconColor={theme == lightTheme ? 'black' : 'white'}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Home
