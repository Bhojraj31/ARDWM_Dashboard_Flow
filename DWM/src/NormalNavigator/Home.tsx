import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

function Home() {
    const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         navigation.navigate('Dashboard')
    //     },5000)
    // },[])
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}} >
        <Text style={{fontSize:30, fontWeight:'bold'}} onPress={()=>{navigation.navigate('Dashboard')}}>
            Get Start
        </Text>
    </View>
  )
}

export default Home
