import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { YourProgramStyle } from '../../styles';
import { SF } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { VectoreIcons } from '../commonComponents';

function CelenderFlatDateTimeFun(props) {
    const { item, index, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const YourProgramStyles = useMemo(() => YourProgramStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => { onPress(); }} style={YourProgramStyles.SetwidStyle}>
            <Text style={YourProgramStyles.settextstyletile}>{t(item.title)}</Text>
            <View style={YourProgramStyles.flexRowAlCent}>
                <Text style={YourProgramStyles.Setdigitstyle}>{item.digit}</Text>
                {item.icon == true && <VectoreIcons icon="AntDesign" name="check" size={SF(22)} color={Colors.theme_background} />
                }
            </View>
        </TouchableOpacity>
    );
};
export default CelenderFlatDateTimeFun;