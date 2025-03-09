import React, { useMemo } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { LinearGradientComp, Spacing, VectoreIcons, } from '../../components';
import { HomeStyle } from '../../styles';
import { SF, SH } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';


const HomeCommonFlatList = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const { item } = props;
    const HomeStyles = useMemo(() => HomeStyle(Colors), [Colors]);

    return (
        <View style={HomeStyles.beginerFlatBoxStyle}>
            <LinearGradientComp start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={[Colors.rich_black, Colors.navyblue, Colors.vivid_sky_blue,]} LinearGradientStyle={HomeStyles.LinearGradientBottom} />
            <ImageBackground source={item.bgImg} style={HomeStyles.homeBiginnerBgImgStyle} />
            <Spacing />
            <View style={HomeStyles.BiginnersInfoBoxStyle}>
                <Text style={HomeStyles.beginnerTitleStyle}>{t(item.title)}</Text>
                <Text style={HomeStyles.beginnerSubTitleStyle}>{t(item.subTitle)}</Text>
                <Spacing />
                <Text style={HomeStyles.beginnerWorkoutNameStyle}>{t(item.workoutName)}</Text>
            </View>
            <View style={HomeStyles.BottomBoxShowData}>
                <View style={HomeStyles.flexRowAlCent}>
                    <View style={HomeStyles.IconBoxStyle}>
                        <VectoreIcons icon="Entypo" name="calendar" size={SF(16)} color={Colors.white_text_color} />
                    </View>
                    <View style={HomeStyles.padL10}>
                        <Text style={HomeStyles.weeknumberStyle}>{t(item.week)}</Text>
                        <Text style={HomeStyles.weekTextStyle}>{t("Week_Label")}</Text>
                    </View>
                </View>
                <View style={HomeStyles.flexRowAlCent}>
                    <View style={HomeStyles.IconBoxStyle}>
                        <VectoreIcons icon="Feather" name="users" size={SF(16)} color={Colors.white_text_color} />
                    </View>
                    <View style={HomeStyles.padL10}>
                        <Text style={HomeStyles.weeknumberStyle}>{t(item.followers)}</Text>
                        <Text style={HomeStyles.weekTextStyle}>{t("Follower_Label")}</Text>
                    </View>
                </View>
                <View style={HomeStyles.flexRowAlCent}>
                    <View style={HomeStyles.IconBoxStyle}>
                        <VectoreIcons icon="AntDesign" name="staro" size={SF(16)} color={Colors.white_text_color} />
                    </View>
                    <View style={HomeStyles.padL10}>
                        <Text style={HomeStyles.weeknumberStyle}>{t(item.rating)}</Text>
                        <Text style={HomeStyles.weekTextStyle}>{t("Rating_Label")}</Text>
                    </View>
                </View>
            </View>
            <Spacing />
        </View>
    )
}

export default HomeCommonFlatList