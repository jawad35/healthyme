import React, { useState, useMemo } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Authentication } from '../../../styles';
import { Button, Container, Spacing, OTPInput, ConfirmationAlert } from '../../../components';
import { RouteName } from '../../../routes';
import { SH } from '../../../utils';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from "react-i18next";

const OtpVerifyScreen = (props) => {
  const { Colors } = useTheme();
  const Authentications = useMemo(() => Authentication(Colors), [Colors]);
  const { navigation } = props;
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [resendModalVisible, setresendModalVisible] = useState(false);
  const onPressHandle = () => {
    setSuccessModalVisible(false)
    navigation.navigate('Home')
  }
  const resendOTP = () => {
    setresendModalVisible(false)
    navigation.navigate(RouteName.OTP_VERYFY_SCREEN)
  }
  return (
    <Container>
      <View style={Authentications.MinViewScreen}>
        <KeyboardAvoidingView enabled>
          <View style={Authentications.MinFlexView}>
            <View style={Authentications.MinViewSecond}>
              <View>
                <Text style={Authentications.verificationTextTitle}>{t("Verification_Text")}</Text>
                <Spacing space={SH(15)} />
                <Text style={Authentications.verificationText}>{t("We_Sent_Otp")}</Text>
                <Spacing space={SH(3)} />
                <Text style={Authentications.verificationText}>{t("On_Number")}</Text>
              </View>
              <Spacing space={SH(50)} />
              <OTPInput
                style={Authentications.OtpViewStyles}
                pinCount={6}
                autoFocusOnLoad={false}
                codeInputFieldStyle={Authentications.CodeInputStyles}
                codeInputHighlightStyle={Authentications.CodeInputStyles}
              />
              <View style={Authentications.FlexRowText}>
                <Text style={Authentications.ParegraPhotpBottom}>{t("Didnt_Recevip_Otp")}</Text>
                <TouchableOpacity onPress={() => setresendModalVisible(true)}>
                  <Text style={Authentications.ResendTextBold}>{t("Resend")}</Text>
                </TouchableOpacity>
              </View>
              <Spacing space={SH(50)} />
              <View>
                <Button onPress={() => setSuccessModalVisible(true)} title={t("Verify_Text")} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        <ConfirmationAlert
          message={t("Verification_Success")}
          modalVisible={successModalVisible}
          setModalVisible={setSuccessModalVisible}
          onPress={() => onPressHandle()}
          loginSuccess={true}
          buttonminview={Authentications.buttonotp}
          buttonText={t("OK_Text")}
        />
        <ConfirmationAlert
          message={t("OTP_Has_Been_Sent")}
          modalVisible={resendModalVisible}
          setModalVisible={setSuccessModalVisible}
          onPress={() => { resendOTP() }}
          otpsend={true}
          buttonminview={Authentications.buttonotp}
          buttonText={t("OK_Text")}
        />
      </View>
    </Container>
  );
};
export default OtpVerifyScreen;
