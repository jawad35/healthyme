import React, { useMemo } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { ReadyToGoStyle } from '../../styles';
import { Container, Spacing, AppHeader, Lottie, CountdownCircleTimerFun } from '../../components';
import images from '../../index';
import { RouteName } from '../../routes';
import { Colors, SH, SW } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const TakeRestScreen = (props) => {
  const { Colors } = useTheme();
  const { t } = useTranslation();
  const ReadyToGoStyles = useMemo(() => ReadyToGoStyle(Colors), [Colors]);
  const { navigation } = props;

  const onCompleteTime = (e) => {
    navigation.navigate(RouteName.WORKOUT_LIST)
  }

  return (
    <Container>
      <StatusBar backgroundColor={Colors.bgwhite} barStyle={'dark-content'} />

      <Spacing space={SH(20)} />
      <AppHeader onPress={() => navigation.navigate(RouteName.START_SCREEN)} Iconname={true} headerTitle={t("Take_Rest_Label")} />
      <View style={ReadyToGoStyles.MainView}>
        <ImageBackground source={images.rest} resizeMode='cover' style={ReadyToGoStyles.setbgimage}>
          <Spacing space={SH(50)} />
          <View style={ReadyToGoStyles.imageLayer}></View>
          <View style={ReadyToGoStyles.viewImageBoxRestInnerViewMain}>
            <View style={ReadyToGoStyles.leftArrowViewMainView}>
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.START_SCREEN)} style={ReadyToGoStyles.leftArrowView}>
                <Lottie source={images.leftArrowWhite} Lottiewidthstyle={ReadyToGoStyles.leftArrow} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={ReadyToGoStyles.restText}>{t("Take_A_Rest_Label")}</Text>
              <Spacing space={SH(30)} />
              <View style={ReadyToGoStyles.viewImageBoxRestInnerView}>
                <Text style={ReadyToGoStyles.restTextNumber}>{t("20s_Label")}</Text>
                <View>
                  <CountdownCircleTimerFun
                    size={SW(130)}
                    isPlaying
                    strokeWidth={SW(5)}
                    duration={15}
                    colors={Colors.navyblue}
                    onComplete={(e) => {
                      // do your stuff here
                      onCompleteTime(e)// repeat animation in 1.5 seconds
                    }}
                    Textstyle={ReadyToGoStyles.ImageTitleWorkMinNumber}
                  />
                </View>
                <Text style={ReadyToGoStyles.restTextNumber}>{t("Skip_Text")}</Text>
              </View>
              <Spacing space={SH(80)} />
            </View>
          </View>
        </ImageBackground>
        <View style={ReadyToGoStyles.restBottomView}>
          <View style={ReadyToGoStyles.restTextView}>
            <Spacing space={SH(30)} />
            <Text style={ReadyToGoStyles.nextText}>{t("Next_Text")}</Text>
            <Spacing space={SH(7)} />
            <Text style={[ReadyToGoStyles.ImageTitleWorkMin]}>{t("Half_Crunch_Kicks_Label")}</Text>
            <Spacing space={SH(7)} />
            <Text style={[ReadyToGoStyles.ImageTitleBig]}>00:30</Text>
          </View>
          <View style={[ReadyToGoStyles.transpharentColor]}>
            <Lottie source={images.abs_crunches} Lottiewidthstyle={[ReadyToGoStyles.restImageSize, ReadyToGoStyles.transpharentColor]} />
          </View>
          <Spacing space={SH(30)} />
        </View>
      </View>
    </Container>
  );
};
export default TakeRestScreen;
