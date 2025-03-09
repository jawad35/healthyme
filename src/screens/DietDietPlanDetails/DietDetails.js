import React, { useState, useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList, ScrollView } from 'react-native';
import { Container, Spacing, VectoreIcons, LinearGradientComp, DietInfoBox, Button, NutritionCom, NutritionFlat, SwipeListViewFun, RnbottumSheet, LikeButton, Input, } from '../../components';
import { DietPlanStyle } from '../../styles';
import { SF, SH, SW, dieatSearchData, nutritionData, nutritionCarbData } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../routes';
import images from '../../index';
import moment from 'moment';

const DietDetails = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const DietPlanStyles = useMemo(() => DietPlanStyle(Colors), [Colors]);
    let currentDate = moment().format('Do MMM, YYYY');
    const totalKcal = 540;
    const refRBSheet = useRef();
    const [listData, setListData] = useState(dieatSearchData);
    const closeItem = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteItem = (rowMap, rowKey) => {
        closeItem(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onItemOpen = rowKey => {
        // console.log('This row opened', rowKey);
    };
    const renderHiddenItem = (data, rowMap) => (
        <View style={DietPlanStyles.rowBack}>
            <TouchableOpacity
                style={[DietPlanStyles.actionButton, DietPlanStyles.deleteBtn]}
                onPress={() => deleteItem(rowMap, data.item.key)}>
                <VectoreIcons icon="AntDesign" name="close" size={SF(25)} color={Colors.white_text_color} />
            </TouchableOpacity>
        </View>
    );

    const handleOpenSheet = () => {
        refRBSheet.current.open();
    };
    const handleCloseSheet = () => {
        refRBSheet.current.close();
    };
    const [searchInput, setSearchInput] = useState('220');

    return (
        <Container backgroundColor={Colors.gray_text_color}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={DietPlanStyles.Container}>
                    <View style={DietPlanStyles.DetailsHeaderBoxStyle}>
                        <ImageBackground source={images.lunch} style={DietPlanStyles.bgImageStyle}>
                            <LinearGradientComp start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.5 }} colors={[Colors.black_text_color, 'transparent',]} LinearGradientStyle={DietPlanStyles.detailsHeaderBox}>
                                <View style={[DietPlanStyles.HeaderTopStyle, DietPlanStyles.detailsTopHeaderStyle]}>
                                    <TouchableOpacity style={DietPlanStyles.HeaderIconBoxStyle} onPress={() => navigation.navigate(RouteName.DIET_PLAN_SCREEN)}>
                                        <VectoreIcons icon="AntDesign" name="arrowleft" size={SF(25)} color={Colors.white_text_color} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={DietPlanStyles.HeaderIconBoxStyle}>
                                        <VectoreIcons icon="Feather" name="edit" size={SF(22)} color={Colors.white_text_color} />
                                    </TouchableOpacity>
                                </View>
                            </LinearGradientComp>
                        </ImageBackground>
                    </View>
                    <View style={DietPlanStyles.dataBoxStyle}>
                        <Spacing space={SH(20)} />
                        <View>
                            <View style={DietPlanStyles.padH20}>
                                <Text style={DietPlanStyles.drawerTitleStyle}>{t("MealTitle_2")}</Text>
                                <View style={DietPlanStyles.flexJusSpBtn}>
                                    <Text style={DietPlanStyles.currentDateStyle}>{currentDate}</Text>
                                    <View style={DietPlanStyles.flexRowAlcen}>
                                        <VectoreIcons icon="SimpleLineIcons" name="energy" size={SF(22)} color={Colors.cornflower_blue} />
                                        <Text style={DietPlanStyles.drawerTotlaKcalStyle}>{totalKcal}</Text>
                                        <Text style={DietPlanStyles.KcalStyle}>{' '}{t("Kcal_Label")}</Text>
                                    </View>
                                </View>
                            </View>
                            <Spacing space={SH(20)} />
                            <SwipeListViewFun
                                data={listData}
                                renderItem={({ item }) => (<DietInfoBox item={item} />)}
                                renderHiddenItem={renderHiddenItem}
                                rightOpenValue={SW(-75)}
                                previewRowKey={'0'}
                                previewOpenValue={-40}
                                previewOpenDelay={3000}
                                onRowDidOpen={onItemOpen}
                            />
                            <Spacing space={SH(20)} />
                            <Button title={t("Add_More_Label")} buttonStyle={DietPlanStyles.addMoreBtnStyle} onPress={() => handleOpenSheet()} />
                            <Spacing space={SH(40)} />

                            <Text style={[DietPlanStyles.NutritionStyel, DietPlanStyles.padH20]}>{t("Nutritian_Fact_Label")}</Text>
                            <Spacing space={SH(17)} />
                            <NutritionCom
                                rowTitleLeft={t("Enenrgy_Label")}
                                rowRightTotalKcal={totalKcal}
                                Kcal={t("Kcal_Label")}
                            />
                            <Spacing space={SH(17)} />
                            <NutritionCom
                                rowTitleLeft={t("Fat_Text_Label")}
                                rowRightTotalKcal={32}
                                Kcal={t("G_Label")}
                            />
                            <View style={DietPlanStyles.FlatBoxStyle}>
                                <FlatList
                                    data={nutritionData}
                                    renderItem={({ item }) => (<NutritionFlat item={item} />)}
                                />
                            </View>
                            <Spacing space={SH(17)} />
                            <NutritionCom
                                rowTitleLeft={t("Protine_Label")}
                                rowRightTotalKcal={24}
                                Kcal={t("G_Label")}
                            />
                            <Spacing space={SH(17)} />
                            <NutritionCom
                                rowTitleLeft={t("Carbs_Label")}
                                rowRightTotalKcal={130}
                                Kcal={t("G_Label")}
                            />
                            <View style={DietPlanStyles.FlatBoxStyle}>
                                <FlatList
                                    data={nutritionCarbData}
                                    renderItem={({ item }) => (<NutritionFlat item={item} />)}
                                />
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
            <RnbottumSheet
                refRBSheet={refRBSheet}
                closeOnDragDown={false}
                closeOnPressMask={true}
                height={SH(400)}
                openDuration={500}
                animationType={'slide'}
                customStyles={{
                    wrapper: {
                        backgroundColor: Colors.black_rgba,
                    },
                    draggableIcon: {
                        backgroundColor: Colors.black_rgba,
                    },
                    container: {
                        borderTopRightRadius: SW(70),
                    }
                }}>
                <View style={DietPlanStyles.heightFull}>
                    <Spacing space={SH(20)} />
                    <View style={DietPlanStyles.padH20}>
                        <Text style={DietPlanStyles.drawerTitleStyle}>{t("Avocado_Label")}</Text>
                        <View style={DietPlanStyles.flexJusSpBtn}>
                            <View style={DietPlanStyles.flexJusSpBtn}>
                                <Text style={DietPlanStyles.currentDateStyle}>{t("Fresh_Label")}</Text>
                                <VectoreIcons icon="FontAwesome" name="circle" size={SF(5)} color={Colors.gray_text_color} iconStyle={DietPlanStyles.IconRoundStyle} />
                                <Text style={DietPlanStyles.currentDateStyle}>{t("No_Skin_Label")}</Text>
                                <VectoreIcons icon="FontAwesome" name="circle" size={SF(5)} color={Colors.gray_text_color} iconStyle={DietPlanStyles.IconRoundStyle} />
                                <Text style={DietPlanStyles.currentDateStyle}>{t("No_Seed_Label")}</Text>
                            </View>
                            <View style={DietPlanStyles.flexRowAlcen}>
                                <LikeButton />
                            </View>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={[DietPlanStyles.padH20, DietPlanStyle.heightFull]}>
                            <Spacing space={SH(20)} />
                            <Input
                                inputStyle={DietPlanStyles.inputBorderStyle}
                                inputContainerStyle={DietPlanStyles.ItemAddInpute}
                                onChangeText={(inputSearch) => setSearchInput(inputSearch)}
                                value={searchInput}
                            />
                            <View style={DietPlanStyles.flexJusSpBtn}>
                                <View>
                                    <Text style={DietPlanStyles.itemTitleStyle}>{t("Calorie_Label")}</Text>
                                    <Text style={DietPlanStyles.energySTyle}>{223}{' '}{t("Kcal_Label")}</Text>
                                </View>
                                <View>
                                    <Text style={DietPlanStyles.itemTitleStyle}>{t("Carbs_Label")}</Text>
                                    <Text style={DietPlanStyles.energySTyle}>{15}{' '}{t("G_Label")}</Text>
                                </View>
                                <View>
                                    <Text style={DietPlanStyles.itemTitleStyle}>{t("Protine_Label")}</Text>
                                    <Text style={DietPlanStyles.energySTyle}>{2.8}{' '}{t("G_Label")}</Text>
                                </View>
                                <View>
                                    <Text style={DietPlanStyles.itemTitleStyle}>{t("Fat_Text_Label")}</Text>
                                    <Text style={DietPlanStyles.energySTyle}>{24}{' '}{t("G_Label")}</Text>
                                </View>
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={DietPlanStyles.itemSummuryBox}>
                                <Text style={DietPlanStyles.itemSummuryTextStyle}>{t("item_summary_Text")}</Text>
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={DietPlanStyles.flexJusSpBtn}>
                                <Button title={t("Delete_Label")} buttonStyle={DietPlanStyles.deleteBtnStyle}
                                    buttonTextStyle={DietPlanStyles.deleteBtnTextStyle} onPress={() => handleCloseSheet()}
                                />
                                <Button title={t("Add_More_label")} buttonStyle={DietPlanStyles.addBtnStyle} onPress={() => handleCloseSheet()}
                                />
                            </View>
                            <Spacing space={SH(20)} />
                        </View>
                    </ScrollView>
                </View>
            </RnbottumSheet>
        </Container>
    )
}

export default DietDetails