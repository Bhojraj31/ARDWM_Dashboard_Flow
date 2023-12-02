/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- CircularSlideGraph
 * @Type:- Functional Component
 * @Role:- For showing CircularSlideGraph on dashboard screen-2
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CircularSlider } from '@v3ron/react-native-circular-slider';
import { useTheme } from '../theme/ThemeProvider';

// ------ SliderState for startAngle and angleLength ------
interface SliderState {
    startAngle: number;
    angleLength: number;
}
// ------ React Native Funcational Export Component with styles------
const CustomCircularSlider = () => {
    // ------ Used Theme Here ------
    const { theme } = useTheme();
    const { text, background } = theme.colors;
    // ------ State for sliderState ------
    const [sliderState, setSliderState] = useState<SliderState>({
        startAngle: 45,
        angleLength: 60,
    });
    const { startAngle, angleLength } = sliderState;
    // ------ method for update slider's startAngle or angleLength ------
    const onUpdate = ({ startAngle, angleLength }: SliderState) => {
        setSliderState({ startAngle, angleLength });
    };
    // ------ Return react native component here ------
    return (
        // ------ CircularSlider here ------
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
export default CustomCircularSlider
