import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Container, AppHeader, CelenderFlatDateTimeFun, Spacing, VectoreIcons, LinearGradientComp, WorkoutFlatFun, Button, Graph } from '../../components';
import { YourProgramStyle } from '../../styles';
import { SF, SH, Calenderdata, workoutData, lineData } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../routes';

const YourProgram = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const YourProgramStyles = useMemo(() => YourProgramStyle(Colors), [Colors]);
    const [sselect, setSelectDate] = useState();

    return (
        <Container>
            <Spacing space={SH(15)} />
            <AppHeader onPress={() => navigation.navigate(RouteName.TRAINING_TAB)} Iconname={true} headerTitle={t("Your_Program_Label")} />
            <ScrollView>
                <View style={YourProgramStyles.Container}>
                    <Spacing />
                    <View style={YourProgramStyles.Pad20}>
                        <Text style={YourProgramStyles.Week_Label_Style}>{t("WeekTitle_Label")}</Text>
                    </View>
                    <Spacing space={SH(10)} />
                    <FlatList
                        data={Calenderdata}
                        horizontal
                        renderItem={({ item, index }) => (<CelenderFlatDateTimeFun
                            item={item} index={index}
                            onPress={() => setSelectDate(index)}
                        />)}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={YourProgramStyles.CelenderFlatDateContainer}
                    />
                    <Spacing space={SH(20)} />
                    <View style={[YourProgramStyles.Pad20, YourProgramStyles.FlexRowJuSPBTn]}>
                        <Text style={YourProgramStyles.TitleForCourseStyle}>{t("Workout_Today_Label")}</Text>
                        <TouchableOpacity style={[YourProgramStyles.flexRowAlCent, YourProgramStyles.TouchableHeight]}
                            onPress={() => navigation.navigate(RouteName.WORKOUT_LIST)}
                        >
                            <Text style={YourProgramStyles.SeeAllTextStyle}>{t("Routine_Label")}</Text>
                            <VectoreIcons icon="MaterialIcons" name="arrow-right-alt" size={SF(25)} color={Colors.black_text_color} />
                        </TouchableOpacity>
                    </View>
                    <Spacing space={SH(20)} />
                    <View style={YourProgramStyles.Pad20}>
                        <View style={YourProgramStyles.WorkoutInfoBox}>
                            <LinearGradientComp start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={[Colors.rich_black, Colors.navyblue, Colors.vivid_sky_blue,]} LinearGradientStyle={YourProgramStyles.LinearGradientBottom} />
                            <View style={YourProgramStyles.WorkoutInfoBoxTop}>
                                <Text style={YourProgramStyles.TrainiBannerTitleStyle}>{t("Title_First_Of_Two_Label_")}</Text>
                                <Text style={YourProgramStyles.TrainiBannerTitleStyle}>{t("Title_Second_Of_Two_Label")}</Text>
                            </View>
                            <View style={YourProgramStyles.Pad20}>
                                <Spacing space={SH(25)} />
                                <FlatList
                                    numColumns={1}
                                    data={workoutData}
                                    renderItem={({ item, index }) => (<WorkoutFlatFun item={item} index={index} />)}
                                />
                                <Spacing space={SH(15)} />
                            </View>
                            <View style={YourProgramStyles.BtnBoxStyle}>
                                <Spacing />
                                <Button title={t("Start_Workout_Label")} onPress={() => navigation.navigate(RouteName.WORKOUT_LIST)} buttonStyle={YourProgramStyles.BtnStyle} buttonTextStyle={YourProgramStyles.BtntextStyle} />
                                <Spacing />
                            </View>
                        </View>
                    </View>
                    <Spacing space={SH(30)} />
                    <View style={[YourProgramStyles.Pad20, YourProgramStyles.FlexRowJuSPBTn]}>
                        <Text style={YourProgramStyles.TitleForCourseStyle}>{t("Calories_Label")}</Text>
                    </View>
                    <Spacing space={SH(30)} />
                    <View style={YourProgramStyles.graphView}>
                        <Graph
                            height={SH(200)}
                            initialSpacing={0}
                            data={lineData}
                            spacing={35}
                            textColor1={Colors.black_text_color}
                            textShiftY={-8}
                            textShiftX={-10}
                            textFontSize={SF(13)}
                            thickness={2}
                            hideRules
                            yAxisColor={Colors.theme_background}
                            showVerticalLines
                            verticalLinesColor={Colors.theme_background}
                            xAxisColor={Colors.theme_background}
                            color={Colors.theme_background}
                            isAnimated={true}
                            yAxisTextStyle={{ color: Colors.black_text_color }}
                        />
                    </View>
                </View>
            </ScrollView>
        </Container>
    )
}

export default YourProgram