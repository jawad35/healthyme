import React from 'react';
import { View, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTab, MydiaryTab, Profile, TrainingTab, } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Style } from '../styles';
import { ColorPicker, CustomSidebarMenu, VectoreIcons, HeaderLeftMenuIcon, AppHeader } from '../components';
import { RouteName } from '../routes';
import { Colors, SH, SF } from '../utils';
import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const headerArray = {
  headerShown: true,
  headerTitleStyle: Style.headerTitleStyle,
  headerStyle: Style.headerStyle,
  headerShadowVisible: false,
};

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeScsreenTabAll" drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen name="HomeScsreenTabAll"
        options={{ headerShown: false }}
        component={HomeScsreenTabAll} />
    </Drawer.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Homese" component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

function HomeTabScreenStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerTitle: () => <AppHeader {...props} headerTitle={t("Home_Text")} />,
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function TrainingTabStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="TrainingTab">
      <Stack.Screen
        name="TrainingTab"
        component={TrainingTab}
        options={{
          headerTitle: () => <AppHeader {...props} headerTitle={t("Training_Label")} />,
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator >
  );
}
function MydiaryTabStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="MydiaryTab">
      <Stack.Screen
        name="MydiaryTab"
        component={MydiaryTab}
        options={{
          headerTitle: () => <AppHeader {...props} headerTitle={t("My_Dairy_Label")} />,
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileScreenStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: () => <AppHeader {...props} headerTitle={t("Profile_Text")} />,
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export function HomeScsreenTabAll(props) {
  const { t } = useTranslation();
  return (
    <Tab.Navigator initialRouteName="Homes"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: Colors.theme_background,
        inactiveTintColor: Colors.black_text_color,
        labeled: true,
        labelStyle: {
        },
        tabStyle: {
          backgroundColor: Colors.white_text_color,
          paddingTop: 0,
        },
      }}
    >
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel: t("Home_Text"),
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              icon="Feather"
              size={SF(19)}
              name="home"
              color={focused ? Colors.theme_background : Colors.black_text_color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.TRAINING_TAB}
        component={TrainingTabStack}
        options={{
          tabBarLabel: t("Training_Title_Label"),
          tabBarIcon: ({ focused }) => (
            <View>
              <VectoreIcons icon="FontAwesome5" name="dumbbell" color={focused ? Colors.theme_background : Colors.black_text_color} size={SF(18)} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.MY_DAIRY_TAB}
        component={MydiaryTabStack}
        options={{
          tabBarLabel: t("My_Dairy_Label"),
          tabBarIcon: ({ focused }) => (
            <VectoreIcons icon="AntDesign" name="book"
              size={SF(23)}
              color={focused ? Colors.theme_background : Colors.black_text_color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: t("Profile_Text"),
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              icon="FontAwesome"
              size={SF(19)}
              name="user-circle"
              color={focused ? Colors.theme_background : Colors.black_text_color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
