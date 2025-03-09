import React, { useMemo } from 'react';
import { View, Text,  } from 'react-native';
import { DietPlanStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const NutritionFlat = (props) => {
    const { item } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const DietPlanStyles = useMemo(() => DietPlanStyle(Colors), [Colors]);
    return (
        <View style={DietPlanStyles.CommonDataBoxStyel}>
            <Text style={DietPlanStyles.nutRowDataStyle}>{t(item.leftTitle)}</Text>
            <Text style={DietPlanStyles.nutRowDataStyle}>{t(item.nutriion)}</Text>
        </View>
    )
}

export default NutritionFlat