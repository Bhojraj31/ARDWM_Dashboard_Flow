import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';

const { height, width } = Dimensions.get('window');

const Carousels = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState<number>(1); 

  const flatListRef = useRef<FlatList | null>(null);

  const handleScrollEnd = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width); // Round to the nearest index
    setCurrentIndex(newIndex);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor:'black' }}>
      <View
        style={{
          height: height / 2 + 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FlatList
          ref={(ref) => (flatListRef.current = ref)}
          data={data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          initialScrollIndex={1} 
          initialNumToRender={2} 
          onMomentumScrollEnd={handleScrollEnd}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: width - 60,
                  height: height / 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  disabled={true}
                  style={{
                    width: '97%',
                    height: '100%',
                    backgroundColor: '#282b30',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    Hello
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      {/* pagination */}
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          position:'absolute',
          bottom:20, 
        }}
      >
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: currentIndex === index ? 10 : 8,
                height: currentIndex === index ? 10 : 8,
                borderRadius: currentIndex === index ? 5 : 4,
                backgroundColor: currentIndex === index ? 'white' : 'rgba(52, 52, 52, 0.8)',
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
