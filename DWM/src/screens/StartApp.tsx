import React from 'react';
import { View, StyleSheet } from 'react-native';

interface SkillBarProps {
  percentage: number;
}

const StartApp: React.FC<SkillBarProps> = ({ percentage }) => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.line}></View>
      <View style={[styles.progress, { height: `${percentage}%` }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
    width: 5,
    height: '100%',
    backgroundColor: 'lightgrey',
    position: 'relative',
    left: 200,
  },
  line: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightgrey',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  progress: {
    width: '100%',
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 0, 
    left: 0,
  },
});

export default StartApp;
