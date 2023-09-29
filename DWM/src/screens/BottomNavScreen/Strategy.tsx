import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';

const Strategy = () => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 10 }}>
      
      {/* Card here */}
      <Card style={{ backgroundColor: '#202833', padding: 10 }} >

        {/* 1-Row */}
        <Card.Content style={{ alignSelf: 'center' }}>
          <View style={{ flexDirection: 'row' , alignSelf:'center'}}>
            <Text variant="titleLarge" style={{ color: 'white', fontSize: 28 }} >
              9.8
            </Text>
            <Text variant="titleLarge" style={{ color: 'white', fontSize: 15 }} > Cr </Text>
          </View>
          <Text variant="bodyMedium" style={{ color: 'grey' }}>Wealth Target</Text>
        </Card.Content>

        {/* 2-Row */}
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} >
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text variant="titleLarge" style={{ color: '#0987ed', fontSize: 28 }} >
                18.0
              </Text>
              <Text variant="titleLarge" style={{ color: '#0987ed', fontSize: 15 }} > Lacs </Text>
            </View>
            <Text variant="bodyMedium" style={{ color: 'grey' }}>Current Wealth</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text variant="titleLarge" style={{ color: '#0987ed', fontSize: 28 }} >
                1.0
              </Text>
              <Text variant="titleLarge" style={{ color: '#0987ed', fontSize: 15 }} > Lacs </Text>
            </View>
            <Text variant="bodyMedium" style={{ color: 'grey' }}>Annual Saving</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text variant="titleLarge" style={{ color: '#0987ed', fontSize: 28 }} >
                25
              </Text>
              <Text variant="titleLarge" style={{ color: '#0987ed', fontSize: 15 }} > Years </Text>
            </View>
            <Text variant="bodyMedium" style={{ color: 'grey' }}>TimeFrame</Text>
          </View>
        </Card.Content>

        {/* 3-Row */}
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} >
          <View style={{ flexDirection: 'row' }}>
            <Checkbox
              status={checked1 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked1(!checked1);
              }}
            />
            <View style={{ flexDirection: 'column' }} >

              <Text style={{ color: 'grey' }} >
                Equity Market
              </Text>
              <Text style={{ color: 'grey' }} >
                Protection
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Checkbox
              status={checked2 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked2(!checked2);
              }}
            />
            <View style={{ flexDirection: 'column' }} >

              <Text style={{ color: 'grey' }} >
                Plan B with NON-PP Structured
              </Text>
              <Text style={{ color: 'grey' }} >
                Protection
              </Text>
            </View>
          </View>
        </Card.Content>
        
        {/* 4-Row */}
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} >
          <View>
            <Text variant="titleLarge" style={{ color: 'white', fontSize: 28 }} >
              60
            </Text>
            <Text style={{ color: 'grey' }} >
              Equity MF
            </Text>
          </View>
          <View>

          </View>
          <View>
            <Text variant="titleLarge" style={{ color: 'white', fontSize: 28 }} >
              40
            </Text>
            <Text style={{ color: 'grey' }} >
              Debt MF
            </Text>
          </View>
        </Card.Content>
      </Card>
      
      {/* View recommended Portfolio */}
      <View style={{ justifyContent: 'center', alignItems: 'center',position: 'absolute', bottom: 15, left:85 }} >
        <TouchableOpacity >
          <Text style={{ color: '#0987ed', fontSize: 18 }} >
            View Recommended Portfolio
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Strategy

const styles = StyleSheet.create({})