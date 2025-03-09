import { View, Text } from 'react-native'
import React from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const CountdownCircleTimerFun = (props) => {
    const { isPlaying, duration, colors, onComplete, Textstyle, strokeWidth, size } = props;
    return (
        <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={duration}
            colors={colors}
            onComplete={onComplete}
            strokeWidth={strokeWidth}
            size={size}
        >
            {({ remainingTime }) => <Text style={Textstyle}>{remainingTime}</Text>}
        </CountdownCircleTimer>
    )
}

export default CountdownCircleTimerFun