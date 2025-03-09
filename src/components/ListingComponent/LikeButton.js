import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { VectoreIcons, } from '../../components';
import { SF } from '../../utils';
import { useTheme } from '@react-navigation/native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle, Extrapolate, interpolate, } from "react-native-reanimated";

const LikeButton = (props) => {
    const { Colors } = useTheme();
    const liked = useSharedValue(0);

    const outlineStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
                },
            ],
        };
    });

    const fillStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: liked.value,
                },
            ],
            opacity: liked.value,
        };
    });

    return (
        <TouchableOpacity onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}>
            <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
                <VectoreIcons icon="AntDesign" name={"hearto"} size={SF(25)} color={Colors.red} />
            </Animated.View>
            <Animated.View style={fillStyle}>
                <VectoreIcons icon="AntDesign" name={"heart"} size={SF(25)} color={Colors.red} />
            </Animated.View>
        </TouchableOpacity>
    );
}

export default LikeButton