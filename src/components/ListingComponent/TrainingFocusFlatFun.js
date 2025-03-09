import React, { useMemo } from 'react';
import { View, Text, Image, } from 'react-native';
import { Spacing } from '../../components';
import { TrainingStyle } from '../../styles';
import { SF, SH, } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const TrainingFocusFlatFun = (props) => {
    
    const { item } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const TrainingStyles = useMemo(() => TrainingStyle(Colors), [Colors]);

    return (
        <View style={TrainingStyles.areaFocusBoxStyle}>
            <Image source={item.workoutImg} style={TrainingStyles.WorkOutStyle} resizeMode="contain" />
            <Spacing space={SH(15)} />
            <Text style={TrainingStyles.WorkNameStyle}>{t(item.Workname)}</Text>
        </View>
    )
}

export default TrainingFocusFlatFun