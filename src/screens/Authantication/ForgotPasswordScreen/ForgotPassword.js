import React, { useState, useMemo } from "react";
import { Text, View, ScrollView } from "react-native";
import { ForgotPasswordStyle } from '../../../styles';
import { Button, ConfirmationAlert, Spacing, AppHeader, Input, VectoreIcons, Container } from '../../../components';
import { SH, SF } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { RouteName } from "../../../routes";

const ForgotPassword = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const { navigation } = props;
  const ForgotPasswordStyles = useMemo(() => ForgotPasswordStyle(Colors), [Colors]);
  const [email, setEmailValidError] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  let alertdata = {
    'logout': t("Email_Successfull"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN)
  }
  return (
    <Container>
      <Spacing space={SH(20)} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={ForgotPasswordStyles.ScrollViewStyles}>
        <AppHeader onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} Iconname={true} headerTitle={t("Forget_Password")} />
        <View style={ForgotPasswordStyles.TabMinView}>
          <View>
            <View style={ForgotPasswordStyles.TabMinViewChild}>
              <View style={ForgotPasswordStyles.InputUnderLine}>
                <View>
                  <VectoreIcons icon="MaterialIcons" style={ForgotPasswordStyles.Marginright} name="email" size={SF(25)} />
                </View>
                <Input
                  inputStyle={ForgotPasswordStyles.InputStyles}
                  placeholder={t("Enter_Email")}
                  onChangeText={(e) => setEmailValidError(e)}
                  keyboardType={'email-address'}
                  value={email}
                />
              </View>
              <Spacing space={SH(20)} />
              <Text style={ForgotPasswordStyles.SeTextStyleForget}><Text style={ForgotPasswordStyles.StarColor}> * </Text> {t("We_Well_Sand_Message")}</Text>
              <Spacing space={SH(20)} />
              <Button onPress={() => {
                setAlertVisible(true);
                setAlertMessage(alertdata.logout);
              }} title={t("Submitbutton")} />
              <ConfirmationAlert
                message={alertMessage}
                buttonminview={ForgotPasswordStyles.CenterButton}
                modalVisible={alertVisible}
                setModalVisible={setAlertVisible}
                onPressCancel={() => setAlertVisible(!alertVisible)}
                onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                iconVisible={true}
                buttonText={t("Ok")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};
export default ForgotPassword;
