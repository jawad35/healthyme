import React, { useState, useMemo } from 'react';
import { View, Text, } from 'react-native';
import { DietPlanStyle } from '../../styles';
import { SF, SH, } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const NutritionCom = (props) => {
    const { rowTitleLeft, rowRightTotalKcal, Kcal } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const DietPlanStyles = useMemo(() => DietPlanStyle(Colors), [Colors]);

    return (
        <View>
            <View style={DietPlanStyles.CommonHeaderStyel}>
                <Text style={DietPlanStyles.energySTyle}>{rowTitleLeft}</Text>
                <Text style={DietPlanStyles.tabletotleRowStyel}>{rowRightTotalKcal}{' '}{Kcal}</Text>
            </View>            
        </View>
    )
}

export default NutritionCom