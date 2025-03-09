import React, { useState, useMemo } from "react";
import { View, ScrollView, KeyboardAvoidingView, Text, FlatList, TouchableOpacity } from "react-native";
import { HelpScreenStyles, Style, } from '../../styles';
import { Spacing, Input, VectoreIcons, FaqFun } from '../../components';
import { Faqdataset, SH, SF } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const FAQScreen = () => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const [search, Setsearch] = useState('');
    const HelpScreenStyle = useMemo(() => HelpScreenStyles(Colors), [Colors]);
    const [show, setShow] = useState(null);
    const toggleHandler = (id) => {
        (id === show) ? setShow(null) : setShow(id)
    };

    return (
        <View style={HelpScreenStyle.MinViewScreen}>
            <View>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.ScrollViewStyles}>
                    <KeyboardAvoidingView enabled>
                        <View style={HelpScreenStyle.MinFlexView}>
                            <View style={HelpScreenStyle.MinViewAllContent}>
                                <Spacing space={SH(20)} />
                                <View style={HelpScreenStyle.SpaceBeetveen}>
                                    <View style={HelpScreenStyle.SearchView}>
                                        <TouchableOpacity style={HelpScreenStyle.WidthSet}>
                                            <Input
                                                placeholder={t("Search_Label")}
                                                onChangeText={(e) => Setsearch(e)}
                                                value={search}
                                                leftIcon={<VectoreIcons icon="AntDesign" iconStyle={HelpScreenStyle.Marginright} name="search1" size={SF(20)} />}
                                                placeholderTextColor={Colors.gray_text_color}
                                                inputStyle={HelpScreenStyle.SearchInputBorder}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Spacing space={SH(20)} />
                                <FlatList
                                    data={Faqdataset}
                                    renderItem={({ item, index }) => (<FaqFun item={item} index={index} onPress={() => { toggleHandler(item.id); }} show={show} />)}
                                    IcononPressChange={() => toggleHandler(item.id)}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    style={HelpScreenStyle.SetFlex}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </View>
    );
};
export default FAQScreen;
