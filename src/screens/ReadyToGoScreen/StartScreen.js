import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { ReadyToGoStyle } from '../../styles';
import { Container, Spacing, AppHeader, Lottie } from '../../components';
import images from '../../index';
import { RouteName } from '../../routes';
import { Colors, SH, SW } from '../../utils';
import { useCountdown } from 'react-native-countdown-circle-timer';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const StartScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const ReadyToGoStyles = useMemo(() => ReadyToGoStyle(Colors), [Colors]);

  const onCompleteTime = (e) => {
    // navigation.navigate(RouteName.StartWorkOutW)
  }
  const duration = 30;
  const calculatenumber = 100 / duration;
  const {
    remainingTime,
    elapsedTime,
  } = useCountdown({ isPlaying: true, duration: duration, colors: '#abc' })

  const children = (remainingTime) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`
  }

  return (
    <Container>
      <StatusBar backgroundColor={Colors.bgwhite} barStyle={'dark-content'} />

      <Spacing space={SH(20)} />
      <AppHeader onPress={() => navigation.navigate(RouteName.READY_TO_GO_SCREEN)} Iconname={true} headerTitle={t("Start_Work_Label")} />
      <Spacing space={SH(50)} />
      <View style={ReadyToGoStyles.viewImageBoxChallengeInnerView}>
        <View style={ReadyToGoStyles.exerciseView}>
          <Lottie source={images.frog_press} Lottiewidthstyle={ReadyToGoStyles.exercise} />
        </View>
        <View>
          <Spacing space={SH(15)} />
          <View style={ReadyToGoStyles.ImagebottomContent}>
            <View>
              <Text style={[ReadyToGoStyles.ImageTitleWorkMin]}>{t("Crunch_Kicks_Label")}</Text>
              <Spacing space={SH(15)} />
              <Text style={[ReadyToGoStyles.ImageTitleBig]}>{children(remainingTime)}</Text>
            </View>
          </View>
          <Spacing space={SH(70)} />
          <View style={[ReadyToGoStyles.counterMainViewStart]}>
            <View style={[ReadyToGoStyles.counterMainViewStartActive, { width: (elapsedTime * calculatenumber) + '%' }]}>
            </View>
            <View style={[ReadyToGoStyles.counterMainViewStartInnerView]}>
              <Image source={images.pause} style={ReadyToGoStyles.musicplayerImage} />
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.TAKE_REST_SCREEN)} style={ReadyToGoStyles.counterMainViewLeft}>
                <Lottie source={images.rightArrowWhite} Lottiewidthstyle={ReadyToGoStyles.leftsideArrow} />
              </TouchableOpacity>
            </View>
          </View>
          <Spacing space={SH(20)} />
        </View>
      </View>
    </Container>
  );
};
export default StartScreen;
