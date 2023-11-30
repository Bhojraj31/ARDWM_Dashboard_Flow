/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Carousels
 * @Type:- Functional Component
 * @Role:- For showing Carousels on dashboard screen
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import DashboardScreen1 from '../screens/DashboardScreens/DashboardScreen1';
import DashboardScreen2 from '../screens/DashboardScreens/DashboardScreen2';
import DashboardScreen3 from '../screens/DashboardScreens/DashboardScreen3';
import DashboardScreen4 from '../screens/DashboardScreens/DashboardScreen4';
import DashboardScreen5 from '../screens/DashboardScreens/DashboardScreen5';
import DashboardScreen6 from '../screens/DashboardScreens/DashboardScreen6';
import Carousel from 'react-native-reanimated-carousel';

const { height, width } = Dimensions.get('window');

const Carousels = () => {
  const { theme } = useTheme();
  const { text, background } = theme.colors;

  // Define the components for each index
  const components = [
    // null, // Index 0, empty component or placeholder
    <DashboardScreen1 key={1} />, // Index 1
    <DashboardScreen2 key={2} />, // Index 2
    <DashboardScreen3 key={3} />, // Index 3
    <DashboardScreen4 key={4} />, // Index 4
    <DashboardScreen5 key={5} />, // Index 5
    <DashboardScreen6 key={6} />, // Index 6
    // null, // Index 7, empty component or placeholder
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: background }}>
      <View
        style={{
          height: height - 170,
        }}
      >
        <Carousel
          loop
          mode="parallax"
          width={width}
          height={width / 2}
          // autoPlay={true}
          data={components}
          style={{flex:1, }}
          scrollAnimationDuration={1000}
          onSnapToItem={index => setCurrentIndex(index)}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: width,
                height: height,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                disabled={true}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: background
                }}
              >
                {/* Render the component based on the index */}
                {components[index]}
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Pagination */}
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          position: 'absolute',
          bottom: 20,
        }}
      >
        {components.map((item, index) => {
          const adjustedIndex = index;
          return (
            <View
              key={adjustedIndex}
              style={{
                width: currentIndex === adjustedIndex ? 10 : 8,
                height: currentIndex === adjustedIndex ? 10 : 8,
                borderRadius: currentIndex === adjustedIndex ? 5 : 4,
                backgroundColor: currentIndex === adjustedIndex ? text : 'rgba(52, 52, 52, 0.8)',
                marginLeft: 5,
              }}
            ></View>
          );
        })}
      </View>
    </View>
  );
};

export default Carousels;
