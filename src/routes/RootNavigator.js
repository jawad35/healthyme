import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import { Colors } from '../utils';
import { RouteName, SideNavigator } from '../routes';
import {LoginScreen, SplashScreen, Swiperscreen, TranslationScreen, ForgotPassword, YourProgram, WorkoutList, ReadyToGoScreen, StartScreen, TakeRestScreen, DietPlan, DietDetails, AboutSelfScreen, AgeScreen, WeightScreen, GoalScreen, WeHelpScreen, SignUpScreen, OtpVerifyScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [colorValue, setColorValue] = useState(MyTheme);

  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors
  };

  useEffect(() => {
    if (Colors.length != 0 && colorrdata != "") {
      Colors.theme_background = colorrdata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors
      };
      setColorValue(MyThemeNew)
    }
  }, [colorrdata, Colors]);

  return (
    <NavigationContainer theme={colorValue}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={RouteName.ABOUT_SELF_SCREEN} component={AboutSelfScreen} />
        <Stack.Screen name={RouteName.AGE_SCREEN} component={AgeScreen} />
        <Stack.Screen name={RouteName.WEIGHT_SCREEN} component={WeightScreen} />
        <Stack.Screen name={RouteName.GOAL_SCREEN} component={GoalScreen} />
        <Stack.Screen name={RouteName.WE_HELP_SCREEN} component={WeHelpScreen} />
        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={RouteName.SIGNUP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={RouteName.OTP_VERYFY_SCREEN} component={OtpVerifyScreen} />
        <Stack.Screen name={RouteName.HOME_SCREEN} component={SideNavigator} />
        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />
        <Stack.Screen name={RouteName.SELECT_LANGUAGE} component={TranslationScreen} />
        <Stack.Screen name={RouteName.FORGOT_PASSWORD} component={ForgotPassword} />
        <Stack.Screen name={RouteName.YOUR_PROGRAM} component={YourProgram} />
        <Stack.Screen name={RouteName.WORKOUT_LIST} component={WorkoutList} />
        <Stack.Screen name={RouteName.READY_TO_GO_SCREEN} component={ReadyToGoScreen} />
        <Stack.Screen name={RouteName.START_SCREEN} component={StartScreen} />
        <Stack.Screen name={RouteName.TAKE_REST_SCREEN} component={TakeRestScreen} />
        <Stack.Screen name={RouteName.DIET_PLAN_SCREEN} component={DietPlan} />
        <Stack.Screen name={RouteName.DIET_DETAILS} component={DietDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;