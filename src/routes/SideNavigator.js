import React from 'react';
import {RouteName} from '../routes';
import { CustomSidebarMenu, AppHeader, ChatRedirectFun } from '../components';
import { Colors, SF } from '../utils';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from "react-i18next";
import { TabNavigator } from '../routes';
import {
  Chatscreen, SettingsScreen, HelpScreen, FAQScreen, ReviewsScreen, NotificationScreen, s
} from '../screens';
import { Style } from '../styles';

const SideNavigator = (props) => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const { t } = useTranslation();

  const HeaderArray = {
    headerShown: true,
    headerTintColor: Colors.theme_background,
    headerShadowVisible: false,
    headerStyle: Style.headerStyle,
  };

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomSidebarMenu {...props} />} screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: Colors.white_text_color,
      }
    }}
    >
      <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />
      <Drawer.Screen
        name={RouteName.CHAT_SCREEN} component={Chatscreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Graham_Gooch")} />,
          headerRight: () => <ChatRedirectFun />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.HELP_SCREEN} component={HelpScreen}
        options={{
          headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("Help_Text")} />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.FAQ_SCREEN} component={FAQScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("FAQ_Text")} />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.NOTIFICTION_SCREEN} component={NotificationScreen}
        options={{
          headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("Notification_Text")} />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.REVIEWS_SCREEN} component={ReviewsScreen}
        options={{
          headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("Reviews_Screen")} />,
          ...HeaderArray,
        }}
      />

      <Drawer.Screen
        name={RouteName.SETTING_SCREEN} component={SettingsScreen}
        options={{
          headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("Setting_Text")} />,
          ...HeaderArray,
        }}
      />

    </Drawer.Navigator>

  );
}
export default SideNavigator;