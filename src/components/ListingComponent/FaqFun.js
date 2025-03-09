import React, { useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HelpScreenStyles, } from '../../styles';
import { VectoreIcons, } from '../../components';
import { SH, SF } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const FaqFun = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const { item, show, setShow, onPress, IcononPressChange } = props;
    const HelpScreenStyle = useMemo(() => HelpScreenStyles(Colors), [Colors]);

    return (
        <TouchableOpacity style={HelpScreenStyle.BgColorWhite} onPress={() => onPress()}>
            <View>
                <View style={HelpScreenStyle.FlexRowArrowLeftThree}>
                    <View style={HelpScreenStyle.FlexRowCreditCard}>
                        <View style={HelpScreenStyle.TextWidth}>
                            <Text style={HelpScreenStyle.CreditCardText}>{t(item.smalltext)}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => IcononPressChange()}>
                            {show === item.id ? <VectoreIcons icon="AntDesign" name='up' size={SF(21)} /> : <VectoreIcons icon="AntDesign" name='down' size={SF(21)} />}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {show === item.id ? <View>
                <View style={HelpScreenStyle.ParegraPhViewStyle}>
                    <Text style={HelpScreenStyle.ParegraphTextHelp}>{t(item.paymentparegraph)}</Text>
                </View>
            </View> : null}
        </TouchableOpacity>
    )
}

export default FaqFun