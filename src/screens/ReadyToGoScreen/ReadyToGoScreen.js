import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { ReadyToGoStyle } from '../../styles';
import { Container, Spacing, AppHeader, Lottie, CountdownCircleTimerFun } from '../../components';
import images from '../../index';
import { RouteName } from '../../routes';
import { Colors, SH, SW } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const ReadyToGoScreen = (props) => {

  const { t } = useTranslation();
  const { Colors } = useTheme();
  const ReadyToGoStyles = useMemo(() => ReadyToGoStyle(Colors), [Colors]);
  const { navigation } = props;

  const onCompleteTime = (e) => {
    navigation.navigate(RouteName.START_SCREEN)
  }

  return (
    <Container>
      <StatusBar backgroundColor={Colors.bgwhite} barStyle={'dark-content'} />
      <Spacing space={SH(20)} />
      <AppHeader onPress={() => navigation.navigate(RouteName.WORKOUT_LIST)} Iconname={true} headerTitle={t("Ready_To_GO_Label")} />
      <ScrollView>
        <View style={ReadyToGoStyles.viewImageBoxChallengeInnerView}>
          <Spacing space={SH(10)} />
          <View style={ReadyToGoStyles.exerciseView}>
            <Lottie source={images.frog_press} Lottiewidthstyle={ReadyToGoStyles.exercise} />
          </View>
          <View>
            <Spacing space={SH(15)} />
            <View style={ReadyToGoStyles.ImagebottomContent}>
              <View>
                <Text style={[ReadyToGoStyles.ImageTitleBig]}>{t("Ready_To_Go!_Label")}</Text>
                <Spacing space={SH(15)} />
                <Text style={[ReadyToGoStyles.ImageTitleWorkMin]}>{t("Crunch_Kicks_Label")}</Text>
              </View>
            </View>
            <Spacing space={SH(70)} />
            <View style={ReadyToGoStyles.BottomMainView}>
              <View style={ReadyToGoStyles.counterMainView}>
                <CountdownCircleTimerFun
                  isPlaying
                  strokeWidth={SW(8)}
                  duration={10}
                  colors={Colors.navyblue}
                  onComplete={(e) => {
                    // do your stuff here
                    onCompleteTime(e)// repeat animation in 1.5 seconds
                  }}
                  Textstyle={ReadyToGoStyles.ImageTitleWorkMinNumber}
                />
              </View>
              <View style={ReadyToGoStyles.counterMainViewLeft}>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.START_SCREEN)}>
                  <Lottie source={images.rightArrowWhite} Lottiewidthstyle={ReadyToGoStyles.leftsideArrow} />
                </TouchableOpacity>
              </View>
            </View>
            <Spacing space={SH(20)} />

          </View>

        </View>

      </ScrollView>
    </Container>
  );
};
export default ReadyToGoScreen;
