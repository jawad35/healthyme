import React, { useMemo } from "react";
import { Text, View, Image, TouchableOpacity, } from "react-native";
import { Spacing, LinearGradientComp, } from "../../components";
import { useTranslation } from 'react-i18next';
import { MyDiaryStyle } from '../../styles';
import { SF, SH, } from '../../utils';
import { useTheme } from '@react-navigation/native';

const MealsTodayFlatFun = (props) => {
    const { item, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const MyDiaryStyles = useMemo(() => MyDiaryStyle(Colors), [Colors]);

    return (
        <TouchableOpacity style={MyDiaryStyles.mealTodayBox} onPress={() => onPress()}>
            <View style={MyDiaryStyles.mealIconBoxStyle}>
                <Image source={item.mealIcon} style={MyDiaryStyles.mealIconStyle} />
            </View>
            <LinearGradientComp start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={[Colors.rich_black, Colors.navyblue, Colors.vivid_sky_blue,]} LinearGradientStyle={MyDiaryStyles.LinearGradientBottom} />
            <Spacing space={SH(15)} />
            <Text style={MyDiaryStyles.mealTitleStyel}>{t(item.mealTitle)}</Text>
            <Text style={MyDiaryStyles.mealInfoStyel}>{t(item.mealInfo)}</Text>
            <Spacing space={SH(15)} />
            <Text style={MyDiaryStyles.burnedkcalNumStyel}>{t(item.burnedkcalNum)} <Text style={MyDiaryStyles.smallTestStyle}>{t("Kcal_Label")}</Text></Text>
        </TouchableOpacity>
    )
}

export default MealsTodayFlatFun