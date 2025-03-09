import React from 'react'
import { TouchableOpacity } from 'react-native';
import { VectoreIcons } from '../commonComponents';
import { SF } from '../../utils';
import { Style } from '../../styles';
import { useTheme } from '@react-navigation/native';

const ChatRedirectFun = (props) => {
    const { Colors } = useTheme();
    return (
        <TouchableOpacity style={Style.CallIconView}>
            <VectoreIcons icon="Ionicons"
                size={SF(20)}
                name="call"
                color={Colors.theme_background}
            />
        </TouchableOpacity>
    )
}

export default ChatRedirectFun