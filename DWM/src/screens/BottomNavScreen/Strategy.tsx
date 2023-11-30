/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Strategy
 * @Type:- Functional Component
 * @Role:- For showing Strategy
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import { useTheme } from '../../theme/ThemeProvider';

const Strategy = () => {

  const { theme } = useTheme();
  const { cardBackground, label, button, text, background } = theme.colors;
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  return (
    <View style={{ flex: 1, backgroundColor: background, padding: 10 }}>
      {/* Card here */}
      <Card style={{ backgroundColor: cardBackground, padding: 10 }} >

        {/* 1-Row */}
        <Card.Content style={{ alignSelf: 'center'  }}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text variant="titleLarge" style={{ color: label, fontWeight:'bold', fontSize: 28 }} >
              9.8
            </Text>
            <Text variant="titleLarge" style={{ color: label, fontWeight:'bold', fontSize: 15 }} > Cr </Text>
          </View>
          <Text variant="bodyMedium" style={{ color: label }}>Wealth Target</Text>
        </Card.Content>

        {/* 2-Row */}
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} >
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text variant="titleLarge" style={{ color: button, fontSize: 28 }} >
                18.0
              </Text>
              <Text variant="titleLarge" style={{ color: button, fontSize: 15 }} > Lacs </Text>
            </View>
            <Text variant="bodyMedium" style={{ color: label }}>Current Wealth</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text variant="titleLarge" style={{ color: button, fontSize: 28 }} >
                1.0
              </Text>
              <Text variant="titleLarge" style={{ color: button, fontSize: 15 }} > Lacs </Text>
            </View>
            <Text variant="bodyMedium" style={{ color: label }}>Annual Saving</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text variant="titleLarge" style={{ color: button, fontSize: 28 }} >
                25
              </Text>
              <Text variant="titleLarge" style={{ color: button, fontSize: 15 }} > Years </Text>
            </View>
            <Text variant="bodyMedium" style={{ color: label }}>TimeFrame</Text>
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

              <Text style={{ color: label }} >
                Equity Market
              </Text>
              <Text style={{ color: label }} >
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

              <Text style={{ color: label }} >
                Plan B with NON-PP Structured
              </Text>
              <Text style={{ color: label }} >
                Protection
              </Text>
            </View>
          </View>
        </Card.Content>

        {/* 4-Row */}
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} >
          <View>
            <Text variant="titleLarge" style={{ color: label, fontWeight:'bold', fontSize: 28 }} >
              60
            </Text>
            <Text style={{ color: text }} >
              Equity MF
            </Text>
          </View>
          <View>

          </View>
          <View>
            <Text variant="titleLarge" style={{ color: label, fontWeight:'bold', fontSize: 28 }} >
              40
            </Text>
            <Text style={{ color: text }} >
              Debt MF
            </Text>
          </View>
        </Card.Content>
      </Card>

      {/* View recommended Portfolio */}
      <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 15, left: 85 }} >
        <TouchableOpacity >
          <Text style={{ color: button, fontSize: 18 }} >
            View Recommended Portfolio
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Strategy

const styles = StyleSheet.create({})