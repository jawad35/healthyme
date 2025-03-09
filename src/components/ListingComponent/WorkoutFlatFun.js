import React, { useMemo } from 'react';
import { View, Text, } from 'react-native';
import { YourProgramStyle } from '../../styles';
import { SF, SH,  } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { Spacing, VectoreIcons } from '../commonComponents';

const WorkoutFlatFun = (props) => {
    const { item } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const YourProgramStyles = useMemo(() => YourProgramStyle(Colors), [Colors]);

    return (
        <>
            <View style={YourProgramStyles.flexRowAlCent}>
                <VectoreIcons icon={item.VecIcon} name={item.IconName} color={Colors.navyblue} size={SF(22)} /><Text style={YourProgramStyles.WorkoutLabelStyle}>{t(item.workoutInfo)}</Text>
            </View>
            <Spacing />
        </>
    )
}

export default WorkoutFlatFun