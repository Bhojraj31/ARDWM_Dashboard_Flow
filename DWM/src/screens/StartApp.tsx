// StartApp.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

// interface CustomDropdownProps {
//   options: string[];
//   onSelect: (value: string) => void;
// }

const StartApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [onSelect, setOnSelect]=  useState<string | null>(null);
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setOnSelect(value);
    toggleDropdown();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
        <Text>{selectedValue || 'Select an option'}</Text>
        <Image
          source={require('../assets/images/Arrow.png')} // Replace with your arrow icon
          style={[styles.arrowIcon, isOpen && styles.rotateArrow]}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)} style={styles.option}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  arrowIcon: {
    marginLeft: 'auto',
    width: 15,
    height: 15,
    transform: [{ rotate: '270deg' }],
  },
  rotateArrow: {
    transform: [{ rotate: '90deg' }],
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderTopWidth: 0,
    borderRadius: 5,
  },
});

export default StartApp;
