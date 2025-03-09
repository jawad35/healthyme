import React, { useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Container, Spacing, VectoreIcons, LinearGradientComp, Button, WorkoutListOfFlatList } from '../../components';
import { WorkoutDetailStyle } from '../../styles';
import { SF, SH, listingData } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../routes';

const WorkoutList = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const WorkoutDetailStyles = useMemo(() => WorkoutDetailStyle(Colors), [Colors]);

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
            <View style={WorkoutDetailStyles.HeaderAndBannerBox}>
                <Spacing space={SH(20)} />
                <LinearGradientComp start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={[Colors.rich_black, Colors.navyblue, Colors.vivid_sky_blue,]} LinearGradientStyle={WorkoutDetailStyles.LinearGradientBottom} />
                <View style={[WorkoutDetailStyles.flexRowJusSpBtn, WorkoutDetailStyles.pad20]}>
                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.TRAINING_TAB)}>
                        <VectoreIcons icon="AntDesign" name="arrowleft" size={SF(25)} color={Colors.white_text_color} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <VectoreIcons icon="Feather" name="info" size={SF(20)} color={Colors.black_text_color} />
                    </TouchableOpacity>
                </View>
                <View style={WorkoutDetailStyles.pad20}>
                    <Spacing space={SH(25)} />
                    <Text style={WorkoutDetailStyles.TrainiBannerTitleStyle}>{t("Title_First_Of_Two_Label_")}</Text>
                    <Spacing space={SH(5)} />
                    <Text style={WorkoutDetailStyles.TrainiBannerTitleStyle}>{t("Title_Second_Of_Two_Label")}</Text>
                </View>
                <Spacing space={SH(30)} />
                <View style={[WorkoutDetailStyles.flexRowAlcent, WorkoutDetailStyles.pad20]}>
                    <View style={[WorkoutDetailStyles.TimerBoxStyle, WorkoutDetailStyles.pad20]}>
                        <VectoreIcons icon="MaterialCommunityIcons" name="timer-outline" size={SF(18)} color={Colors.white_text_color} />
                        <Text style={WorkoutDetailStyles.SmallTitle}>{' '}{t("90_Min_Label")}</Text>
                    </View>
                    <View style={[WorkoutDetailStyles.TimerBoxStyle, WorkoutDetailStyles.pad20]}>
                        <VectoreIcons icon="MaterialCommunityIcons" name="dumbbell" size={SF(18)} color={Colors.white_text_color} />
                        <Text style={WorkoutDetailStyles.SmallTitle}>{' '}{t("WorkoutInfo_2")}</Text>
                    </View>
                </View>
                <View style={WorkoutDetailStyles.WhiteBoxShapStyle}>
                    <Text style={WorkoutDetailStyles.WorkoukTitleStyle}>{t("Workout_Title_Label")}</Text>
                    <View style={WorkoutDetailStyles.flexRowAlcent}>
                        <VectoreIcons icon="EvilIcons" name="refresh" size={SF(25)} color={Colors.theme_background} />
                        <Text style={WorkoutDetailStyles.WorkoutSetStyle}>{t("Workout_Set_Label")}</Text>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={WorkoutDetailStyles.workoutListMainView}>
                    <FlatList
                        data={listingData}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (<WorkoutListOfFlatList item={item} index={index} />)}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
            <Spacing space={SH(15)} />
            <View style={WorkoutDetailStyles.pad20}>
                <Button title={t("Start_Label")} onPress={() => navigation.navigate(RouteName.READY_TO_GO_SCREEN)} />
            </View>
            <Spacing space={SH(10)} />
        </Container>
    )
}

export default WorkoutList