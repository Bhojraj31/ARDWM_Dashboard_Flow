import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  useAnimatedRef,
} from 'react-native-reanimated';
import DashboardScreen1 from './DashboardScreens/DashboardScreen1';
import DashboardScreen2 from './DashboardScreens/DashboardScreen2';
import DashboardScreen3 from './DashboardScreens/DashboardScreen3';
import DashboardScreen4 from './DashboardScreens/DashboardScreen4';
import DashboardScreen5 from './DashboardScreens/DashboardScreen5';
import DashboardScreen6 from './DashboardScreens/DashboardScreen6';
import { Text } from 'react-native-paper';

interface StartAppProps {
  // Add any props if needed
}

const StartApp: React.FC<StartAppProps> = () => {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const interval = useRef<NodeJS.Timeout | null>(null);

  const components = [
    null, // Index 0, empty component or placeholder
    <DashboardScreen1 key={1} />, // Index 1
    <DashboardScreen2 key={2} />, // Index 2
    <DashboardScreen3 key={3} />, // Index 3
    <DashboardScreen4 key={4} />, // Index 4
    <DashboardScreen5 key={5} />, // Index 5
    <DashboardScreen6 key={6} />, // Index 6
    <DashboardScreen6 key={7} />, // Index 6
  ];

  const [newData] = useState([
    { key: 'spacer-left' },
    ...components,
    { key: 'spacer-right' },
  ]);

  const { width } = useWindowDimensions();
  const SIZE = width * 0.8;
  const SPACER = (width - SIZE) / 2;

  const x = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View style={{flex:1}}>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        {newData.map((item, index) => {
          const style = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
              [0.88, 1, 0.88],
            );
            return {
              transform: [{ scale }],
            };
          });

          if (item?.key) {
            return <View style={{ width: SPACER }} key={index} />;
          }

          return (
            <View style={{ width: SIZE }} key={index}>
              <Animated.View style={[styles.imageContainer, style]}>
                {components[index]}
              </Animated.View>
              <Text>
                Hello
              </Text>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default StartApp;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: 'pink',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
  },
});
