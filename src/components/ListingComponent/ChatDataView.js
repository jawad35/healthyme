import React, { useMemo } from 'react';
import { View, Text, } from 'react-native';
import { ChatStyles } from '../../styles';
import { SH } from "../../utils";
import { Spacing, VectoreIcons } from '../../components';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const ChatDataView = (props) => {
    const { t } = useTranslation();
    const { item, index, onPress } = props;
    const { Colors } = useTheme();
    const ChatStyle = useMemo(() => ChatStyles(Colors), [Colors]);
    const { detailsStore } = useSelector(state => state.DataReducer) || { detailsStore };

    return (
        <View>
            <View style={ChatStyle.MarginBottomSpace}>
                <View style={ChatStyle.FlexRowJustyCenter}>
                    <View style={ChatStyle.ChatViewBgColor}>
                        <Text style={ChatStyle.TextColorMessage}>{t(item.ChatSelf)}</Text>
                        <Text style={ChatStyle.TextColorMessageTwo}>03:16</Text>
                    </View>
                </View>
                <Text style={ChatStyle.DataSandTimeColor}>{t(item.DateText)}</Text>
                <Spacing space={SH(10)} />
            </View>
            <View style={ChatStyle.MarginBottomSpace}>
                <View style={ChatStyle.FlexRowJustyCentertwo}>                   
                    <View style={ChatStyle.MessageMinviewOwner}>
                        <Text style={ChatStyle.TextColorMessage}>{t(item.DateText_Actually)}</Text>
                        <View style={ChatStyle.FlexCheckSet}>
                            <View>
                                <Text style={ChatStyle.TextColorMessageTwotwo}>{item.ChatTime_User}</Text>
                            </View>
                            <View style={ChatStyle.SetRightIconViewStyle}>
                                <VectoreIcons icon="AntDesign" color={Colors.white_text_color} name="check" />
                                <VectoreIcons icon="AntDesign" color={Colors.white_text_color} iconStyle={ChatStyle.SetIconPotion} name="check" />
                            </View>
                        </View>
                    </View>
                </View>
                <Spacing space={SH(20)} />
            </View>
        </View>
    );
}
export default ChatDataView;