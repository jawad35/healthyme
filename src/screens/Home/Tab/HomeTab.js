import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, ImageBackground } from 'react-native';
import { Container, Input, LinearGradientComp, Spacing, VectoreIcons, HomeCommonFlatList } from '../../../components';
import { HomeStyle } from '../../../styles';
import { SF, SH, ForBeginnersData, advanceProgrameData } from '../../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import images from '../../../index';

const HomeTab = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const { navigation } = props;
    const HomeStyles = useMemo(() => HomeStyle(Colors), [Colors]);
    const [searchInput, setSearchInput] = useState('');
    return (
        <Container backgroundColor={Colors.backgroundColor}>
            <ScrollView>
                <View style={HomeStyles.Container}>
                    <View style={HomeStyles.HomeHeaderBox}>
                        <LinearGradientComp start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={[Colors.rich_black, Colors.navyblue, Colors.vivid_sky_blue,]} LinearGradientStyle={HomeStyles.LinearGradientBottom} />
                        <ImageBackground source={images.homebgImg} style={HomeStyles.homebgImageStyle}>
                        </ImageBackground>
                        <Spacing />
                        <View style={HomeStyles.HomeInfoBoxStyle}>
                            <Text style={HomeStyles.titleHeadingStyle}>{t("Training_Label")}</Text>
                            <Spacing />
                            <Text style={HomeStyles.HomeTaglineStyle}>{t("Home_Banner_Tagline_Label")}</Text>
                            <Spacing space={SH(25)} />
                            <Input
                                leftIcon={<VectoreIcons icon="EvilIcons" name="search" size={SF(22)} color={Colors.gray_text_color} />}
                                inputStyle={HomeStyles.HomeSearchInput}
                                placeholder={t("Search_Label")}
                                inputContainerStyle={HomeStyles.InputContainer}
                                onChangeText={(inputSearch) => setSearchInput(inputSearch)}
                                value={searchInput}
                            />
                        </View>
                        <Spacing />
                    </View>
                    <Spacing space={SH(20)} />
                    {/* For Biginners Section */}
                    <View style={[HomeStyles.Pad20, HomeStyles.FlexRowJuSPBTn]}>
                        <Text style={HomeStyles.TitleForCourseStyle}>{t("For_Beginners_Label")}</Text>
                        <TouchableOpacity style={[HomeStyles.flexRowAlCent, HomeStyles.TouchableHeight]}>
                            <Text style={HomeStyles.SeeAllTextStyle}>{t("See_All_Label")}</Text>
                            <VectoreIcons icon="MaterialIcons" name="arrow-right-alt" size={SF(25)} color={Colors.black_text_color} />
                        </TouchableOpacity>
                    </View>
                    <Spacing space={SH(10)} />
                    <View>
                        <FlatList
                            data={ForBeginnersData}
                            renderItem={({ item, index }) => (<HomeCommonFlatList item={item} index={index} />)}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={HomeStyles.BeginnerContainerStyle}
                        />
                    </View>
                    <Spacing space={SH(30)} />
                    {/* For Biginners Section */}
                    <View style={[HomeStyles.Pad20, HomeStyles.FlexRowJuSPBTn]}>
                        <Text style={HomeStyles.TitleForCourseStyle}>{t("Advance_Programe_Label")}</Text>
                        <TouchableOpacity style={[HomeStyles.flexRowAlCent, HomeStyles.TouchableHeight]}>
                            <Text style={HomeStyles.SeeAllTextStyle}>{t("See_All_Label")}</Text>
                            <VectoreIcons icon="MaterialIcons" name="arrow-right-alt" size={SF(25)} color={Colors.black_text_color} />
                        </TouchableOpacity>
                    </View>
                    <Spacing space={SH(10)} />
                    <View>
                        <FlatList
                            data={advanceProgrameData}
                            renderItem={({ item, index }) => (<HomeCommonFlatList item={item} index={index} />)}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={HomeStyles.BeginnerContainerStyle}
                        />
                    </View>
                </View>
                <Spacing space={SH(15)} />
            </ScrollView>
        </Container>
    );
};
export default HomeTab;