import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

const { height, width } = Dimensions.get('window');

const Carousels = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const flatListRef = useRef<FlatList | null>(null);

  const handleScrollEnd = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (currentIndex < 0) {
      flatListRef.current?.scrollToOffset({
        animated: false,
        offset: (data.length - 1) * width,
      });
      setCurrentIndex(data.length - 1);
    } else if (currentIndex >= data.length) {
      flatListRef.current?.scrollToOffset({ animated: false, offset: 0 });
      setCurrentIndex(0);
    }
  }, [currentIndex, data]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <View
        style={{
          height: height / 2 + 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FlatList
          ref={(ref) => (flatListRef.current = ref)}
          data={[...data, ...data, ...data]} // Add extra items to create the loop effect
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          onMomentumScrollEnd={handleScrollEnd}
          keyExtractor={(item, index) => index.toString()}
          initialScrollIndex={data.length}
          getItemLayout={(data, index) => ({
            length: width - 60,
            offset: (width - 60) * index,
            index,
          })}
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
                    {item}
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
          position: 'absolute',
          bottom: 20,
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