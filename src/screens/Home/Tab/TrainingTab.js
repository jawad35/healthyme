import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, ImageBackground } from 'react-native';
import { Container, Input, LinearGradientComp, Spacing, VectoreIcons, TrainingFocusFlatFun, Lottie } from '../../../components';
import { TrainingStyle } from '../../../styles';
import { SF, SH, trainingFocusData } from '../../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import images from '../../../index';
import { RouteName } from '../../../routes';


const TrainingTab = (props) => {

  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const TrainingStyles = useMemo(() => TrainingStyle(Colors), [Colors]);

  return (
    <Container backgroundColor={Colors.backgroundColor}>
      <ScrollView>
        <View style={TrainingStyles.Container}>
          <View style={[TrainingStyles.Pad20, TrainingStyles.FlexRowJuSPBTn]}>
            <Text style={TrainingStyles.TitleForCourseStyle}>{t("Your_Program_Label")}</Text>
            <TouchableOpacity style={[TrainingStyles.flexRowAlCent, TrainingStyles.TouchableHeight]}
              onPress={() => navigation.navigate(RouteName.YOUR_PROGRAM)}
            >
              <Text style={TrainingStyles.SeeAllTextStyle}>{t("Details_Label")}</Text>
              <VectoreIcons icon="MaterialIcons" name="arrow-right-alt" size={SF(25)} color={Colors.black_text_color} />
            </TouchableOpacity>
          </View>

          <Spacing space={SH(15)} />

          <View style={TrainingStyles.Pad20}>
            <View style={TrainingStyles.TrainingBannerStyle}>
              <View style={TrainingStyles.TextBoxStyle}>
                <Text style={TrainingStyles.SmallTitle}>{t("Next_Workout_Label")}</Text>
                <Spacing space={SH(5)} />
                <Text style={TrainingStyles.TrainiBannerTitleStyle}>{t("Title_First_Label")}</Text>
                <Text style={TrainingStyles.TrainiBannerTitleStyle}>{t("Title_Second_Label")}</Text>
              </View>
              <View style={TrainingStyles.TimerBoxStyle}>
                <VectoreIcons icon="MaterialCommunityIcons" name="timer-outline" size={SF(20)} color={Colors.white_text_color} />
                <Text style={TrainingStyles.SmallTitle}>{' '}{t("90_Min_Label")}</Text>
              </View>
              <LinearGradientComp start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={[Colors.rich_black, Colors.navyblue, Colors.vivid_sky_blue,]} LinearGradientStyle={TrainingStyles.LinearGradientBottom} />
              <TouchableOpacity style={TrainingStyles.BtnBoxStyle} onPress={() => navigation.navigate(RouteName.WORKOUT_LIST)}>
                <Lottie source={images.play_btn} Lottiewidthstyle={TrainingStyles.PlayBtnStyle} />
              </TouchableOpacity>
            </View>
          </View>

          <Spacing space={SH(60)} />

          <View style={TrainingStyles.Pad20}>
            <View style={TrainingStyles.SmallBannerBox}>
              <View style={TrainingStyles.width30}>
                <ImageBackground source={images.smallbannerAb} style={TrainingStyles.SamllBannerImgStyle} />
                <Image source={images.running} style={TrainingStyles.IconStyel} />
              </View>
              <View style={TrainingStyles.width70}>
                <Text style={TrainingStyles.SmallBannerTitleStyle}>{t("SmallBanner_Title_Label")}</Text>
                <Text style={TrainingStyles.SmallBannerTaglineStyel}>{t("SmallBanner_Small_Tagline_One_Label")}</Text>
                <Text style={TrainingStyles.SmallBannerTaglineStyel}>{t("SmallBanner_Small_Tagline_Two_Label")}</Text>
              </View>
            </View>
          </View>

          <Spacing space={SH(30)} />
          {/* Start Focus Section */}
          <View style={[TrainingStyles.Pad20, TrainingStyles.FlexRowJuSPBTn]}>
            <Text style={TrainingStyles.TitleForCourseStyle}>{t("Area_Of_Focus_Label")}</Text>
          </View>
          <Spacing space={SH(5)} />
          <View style={[TrainingStyles.Pad20, TrainingStyles.CenterItem]}>
            <FlatList
              data={trainingFocusData}
              numColumns={2}
              renderItem={({ item, index }) => (<TrainingFocusFlatFun item={item} />)}
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );

};
export default TrainingTab;
