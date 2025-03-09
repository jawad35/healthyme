import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { Spacing, VectoreIcons, } from '../../components';
import { DietPlanStyle } from '../../styles';
import { SF, SH, } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const DietInfoBox = (props) => {
    const { onPress, item, PlusIcon } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const DietPlanStyles = useMemo(() => DietPlanStyle(Colors), [Colors]);

    return (
        <View style={DietPlanStyles.DietInfoBoxStyle}>
            <View>
                <Text style={DietPlanStyles.TitleStyle}>{t(item.title)}</Text>
                <Spacing space={SH(3)} />
                <Text style={DietPlanStyles.infoStyle}>{t(item.info)}</Text>
            </View>
            <View style={DietPlanStyles.flexRowAlcen}>
                <Text style={DietPlanStyles.TotlaKcalStyle}>{t(item.KcalGet)} <Text style={DietPlanStyles.KcalStyle}>{t("Kcal_Label")}</Text></Text>
                {
                    PlusIcon && <TouchableOpacity style={DietPlanStyles.PlusIconBoxStyle} onPress={() => onPress()}>
                        <VectoreIcons icon="AntDesign" name="plus" size={SF(17)} color={Colors.gray_text_color} />
                    </TouchableOpacity>
                }

            </View>
        </View>
    )
}

export default DietInfoBox