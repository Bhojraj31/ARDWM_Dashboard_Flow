import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';

const Screen1 = () => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 10 }}>
      <Card style={{ backgroundColor: '#202833', padding: 10 }} >

        <Card.Content style={{ alignSelf: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text variant="titleLarge" style={{ color: 'white', fontSize: 28 }} >
              9.8
            </Text>
            <Text variant="titleLarge" style={{ color: 'white', fontSize: 15 }} > Cr </Text>
          </View>
          <Text variant="bodyMedium" style={{ color: 'grey' }}>Wealth Target</Text>
        </Card.Content>

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
      
      
      <View style={{ justifyContent: 'center', alignItems: 'center',position: 'absolute', bottom: 15, left:85 }} >
        <Pressable>
          <Text style={{ color: '#0987ed', fontSize: 18 }} >
            View Recoommended Portfolio
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({})