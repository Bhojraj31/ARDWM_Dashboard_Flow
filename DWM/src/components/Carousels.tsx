import React, { useState, useRef, useEffect } from 'react';
import { View,  FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import DashboardScreen1 from '../screens/DashboardScreens/DashboardScreen1';
import DashboardScreen2 from '../screens/DashboardScreens/DashboardScreen2';
import DashboardScreen3 from '../screens/DashboardScreens/DashboardScreen3';
import DashboardScreen4 from '../screens/DashboardScreens/DashboardScreen4';
import DashboardScreen5 from '../screens/DashboardScreens/DashboardScreen5';
import DashboardScreen6 from '../screens/DashboardScreens/DashboardScreen6';

const { height, width } = Dimensions.get('window');

const Carousels = () => {
  const { theme } = useTheme();
  const { text, background } = theme.colors;

  // Define the components for each index
  const components = [
    null, // Index 0, empty component or placeholder
    <DashboardScreen1 key={1} />, // Index 1
    <DashboardScreen2 key={2} />, // Index 2
    <DashboardScreen3 key={3} />, // Index 3
    <DashboardScreen4 key={4} />, // Index 4
    <DashboardScreen5 key={5} />, // Index 5
    <DashboardScreen6 key={6} />, // Index 6
    <DashboardScreen6 key={7} />, // Index 6
    // null, // Index 7, empty component or placeholder
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const flatListRef = useRef<FlatList | null>(null);

  useEffect(() => {
    // Set initial scroll position to the second item
    flatListRef.current?.scrollToIndex({ animated: false, index: 1 });
  }, []);

  const handleScrollEnd = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;

    // Calculate the current index based on the scroll position
    let newIndex = Math.round(contentOffsetX / width);

    // Adjust index for looping
    if (newIndex === components.length - 1) {
      newIndex = 1;
      flatListRef.current?.scrollToIndex({ animated: false, index: newIndex });
    } else if (newIndex === 0) {
      newIndex = components.length - 2;
      flatListRef.current?.scrollToIndex({ animated: false, index: newIndex });
    }
    setCurrentIndex(newIndex);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: background }}>
      <View
        style={{
          height: height - 200,
          // paddingLeft:50
        }}
      >
        <FlatList
          ref={(ref) => (flatListRef.current = ref)}
          data={components}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          onMomentumScrollEnd={handleScrollEnd}
          renderItem={({ item, index }) => {
            // const leftWidth = 5-width;
            // console.log(width);
            // console.log(leftWidth);
            // const rightWidth = width-5;
            // console.log(rightWidth);
            // const totalWidth  = leftWidth+ rightWidth
            // console.log(totalWidth);
            return (
              <View
                style={{
                  width: width,
                  height: height,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // marginHorizontal:5
                  // backgroundColor:'red'
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
            );
          }}
          getItemLayout={(components, index) => ({
            length: width,
            offset: (width) * index,
            index,
          })}
          keyExtractor={(item, index) => index.toString()}
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
        {components.slice(1, -1).map((item, index) => {
          const adjustedIndex = index + 1;
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
