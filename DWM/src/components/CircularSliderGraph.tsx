import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CircularSlider } from '@v3ron/react-native-circular-slider';
import { useTheme } from '../theme/ThemeProvider';

interface SliderState {
    startAngle: number;
    angleLength: number;
}

const CircularSlideGraph = () => {
    const [sliderState, setSliderState] = useState<SliderState>({
        startAngle: 45,
        angleLength: 60,
    });

    const { theme } = useTheme();
    const { text, background } = theme.colors;
    const { startAngle, angleLength } = sliderState;

    const onUpdate = ({ startAngle, angleLength }: SliderState) => {
        setSliderState({ startAngle, angleLength });
    };
    return (
        <CircularSlider
            strokeWidth={15}
            radius={90}
            gradientColorFrom={background}
            gradientColorTo={background}
            clockFaceColor="#000"
            bgCircleColor={text}
            startAngle={startAngle}
            angleLength={angleLength}
            onUpdate={onUpdate}
        />
    )
}
const styles = StyleSheet.create({});
export default CircularSlideGraph
