import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Sidemenu } from '../../styles';
import { RouteName } from '../../routes';
import { ConfirmationAlert, VectoreIcons } from '../../components';
import { Colors, SF } from '../../utils';
import { useTranslation } from "react-i18next";

const CustomSidebarMenu = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  let alertdata = {
    'logout': t("Are_You_Sure_logout"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
  }
  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };
  return (
    <ScrollView>
      <View style={Sidemenu.customslidebarmenu}>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.HOME_TAB)
        }>
          <VectoreIcons icon="Feather"
            size={SF(19)}
            name="home"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Home_Text")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.TRAINING_TAB)
        }>
          <VectoreIcons icon="FontAwesome5"
            size={SF(19)}
            name="dumbbell"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Training_Title_Label")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.MY_DAIRY_TAB)
        }>
          <VectoreIcons icon="AntDesign" name="book"
            size={SF(23)}
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t("My_Dairy_Label")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.YOUR_PROGRAM)
        }>
          <VectoreIcons icon="MaterialIcons" name="schedule"
            size={SF(23)}
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Your_Program_Label")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.WORKOUT_LIST)
        }>
          <VectoreIcons icon="MaterialIcons" name="fitness-center"
            size={SF(23)}
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Start_Workout_Label")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.DIET_PLAN_SCREEN)
        }>
          <VectoreIcons icon="MaterialCommunityIcons" name="food-apple-outline"
            size={SF(23)}
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Diet_Label")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.CHAT_SCREEN)
        }>
          <VectoreIcons icon="Entypo" name="message" style={Sidemenu.logoimage} color={Colors.theme_background} size={SF(20)} />
          <Text style={Sidemenu.hometextstyle}>{t("Chat_Text_Start")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.PROFILE_TAB)
        }>
          <VectoreIcons icon="FontAwesome" size={SF(19)} name="user-circle" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Profile_Text")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.HELP_SCREEN)
        }>
          <VectoreIcons icon="FontAwesome5" size={SF(19)} name="hands-helping" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Help_Text")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.SETTING_SCREEN)
        }>
          <VectoreIcons icon="AntDesign" size={19} name="setting" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Setting_Text")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.FAQ_SCREEN)
        }>
          <VectoreIcons icon="Entypo" size={SF(19)} name="help" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("FAQ_Text")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.REVIEWS_SCREEN)
        }>
          <VectoreIcons icon="Entypo" size={SF(19)} name="star" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Reviews_Screen")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.NOTIFICTION_SCREEN)
        }>
          <VectoreIcons icon="Ionicons" size={SF(19)} name="notifications" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Notification_Text")}</Text>
        </TouchableOpacity>

        <View style={Sidemenu.settingandlogout}>
          <TouchableOpacity style={Sidemenu.flexrowset} onPress={() => {
            setAlertVisible(true);
            setAlertMessage(alertdata.logout);
          }}>
            <VectoreIcons icon="Entypo" name="log-out" color={Colors.theme_background} size={SF(23)} />
            <Text style={Sidemenu.hometextstyle}>{t("Log_Out")}</Text>
          </TouchableOpacity>

        </View>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPressCancel={() => setAlertVisible(!alertVisible)}
          onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
          cancelButtonText={t("Cancel_Button")}
          buttonText={t("Ok")}
        />
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;

