import React, { useMemo } from 'react';
import { View, Text, } from 'react-native';
import { Spacing, Lottie } from '../../components';
import { WorkoutDetailStyle } from '../../styles';
import { SF, SH, } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const WorkoutListOfFlatList = (props) => {
    const { item } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const WorkoutDetailStyles = useMemo(() => WorkoutDetailStyle(Colors), [Colors]);
    return (
        <>
            <View style={WorkoutDetailStyles.workoutList}>
                <View style={WorkoutDetailStyles.Width35}>
                    <Lottie source={item.image} Lottiewidthstyle={WorkoutDetailStyles.exercise} />
                </View>
                <View style={WorkoutDetailStyles.Width65}>
                    <Text style={WorkoutDetailStyles.workoutListText}>{t(item.title)}</Text>
                    <Spacing space={SH(8)} />
                    <Text style={WorkoutDetailStyles.workoutListTextTime}>00:45</Text>
                </View>
            </View>
            <Spacing space={SH(10)} />
            <View style={[WorkoutDetailStyles.RestBox, WorkoutDetailStyles.flexRowAlcent]}>
                <View style={WorkoutDetailStyles.RestChildBoxStyle}>
                    <Text style={WorkoutDetailStyles.RestStyle}>{t("15s_Rest_Label")}</Text>
                </View>
                <Text style={WorkoutDetailStyles.br}></Text>
            </View>
            <Spacing space={SH(10)} />
        </>
    )
}

export default WorkoutListOfFlatList