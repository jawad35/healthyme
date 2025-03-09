import React, { useMemo } from "react";
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity, } from "react-native";
import { Container, Spacing, VectoreIcons, CircleCount, MealsTodayFlatFun } from "../../../components";
import { useTranslation } from 'react-i18next';
import { MyDiaryStyle } from '../../../styles';
import { SF, SH, mealTodayDaya } from '../../../utils';
import { useTheme } from '@react-navigation/native';
import images from "../../../index";
import { RouteName } from "../../../routes";

const SearchTab = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const MyDiaryStyles = useMemo(() => MyDiaryStyle(Colors), [Colors]);
  return (
    <Container>
      <ScrollView>
        <View style={MyDiaryStyles.Container}>
          <Spacing />
          <View style={[MyDiaryStyles.Pad20, MyDiaryStyles.FlexRowJuSPBTn]}>
            <Text style={MyDiaryStyles.TitleForCourseStyle}>{t("Mediterranean_Diet_Label")}</Text>
            <TouchableOpacity style={[MyDiaryStyles.flexRowAlCent, MyDiaryStyles.TouchableHeight]}>
              <Text style={MyDiaryStyles.SeeAllTextStyle}>{t("See_All_Label")}</Text>
              <VectoreIcons icon="MaterialIcons" name="arrow-right-alt" size={SF(25)} color={Colors.black_text_color} />
            </TouchableOpacity>
          </View>
          <Spacing space={SH(30)} />
          <View style={MyDiaryStyles.DietShowBoxStyle}>
            <View style={MyDiaryStyles.flexRowAlCent}>
              <View style={MyDiaryStyles.width50}>
                <View style={MyDiaryStyles.eatenBoxStyle}>
                  <Text style={MyDiaryStyles.DietCommonTextTyle}>{t("Eaten_Text_Label")}</Text>
                  <View style={MyDiaryStyles.flexRowAlCent}>
                    <Image source={images.eat} style={MyDiaryStyles.IconStyle} resizeMode="contain" />
                    <Text style={MyDiaryStyles.KcalNumberStyle}>1200 <Text style={MyDiaryStyles.kcalStyle}>{t("Kcal_Label")}</Text></Text>
                  </View>
                </View>
                <Spacing space={SH(30)} />
                <View style={MyDiaryStyles.kcalBoxStyle}>
                  <Text style={MyDiaryStyles.DietCommonTextTyle}>{t("Eaten_Text_Label")}</Text>
                  <View style={MyDiaryStyles.flexRowAlCent}>
                    <Image source={images.fire} style={MyDiaryStyles.IconStyle} resizeMode="contain" />
                    <Text style={MyDiaryStyles.KcalNumberStyle}>103 <Text style={MyDiaryStyles.kcalStyle}>{t("Kcal_Label")}</Text></Text>
                  </View>
                </View>
              </View>
              <View style={MyDiaryStyles.width50}>
                <CircleCount
                  title={t("kcal_Left_Label")}
                  value={1250}
                  radius={65}
                  progressValueColor={Colors.navyblue}
                  activeStrokeColor={Colors.theme_background}
                  inActiveStrokeColor={Colors.cornflower_blue_rgba}
                  inActiveStrokeOpacity={0.5}
                  inActiveStrokeWidth={5}
                  activeStrokeWidth={10}
                  titleColor={Colors.gray_text_color}
                  duration={2000}
                  maxValue={3000}
                />
              </View>
            </View>
            <Spacing space={SH(25)} />
            <View style={MyDiaryStyles.lineStyle}></View>
            <Spacing space={SH(25)} />
            <View style={MyDiaryStyles.FlexRowJuSPBTn}>
              <View style={MyDiaryStyles.CalBurnedTypeBox}>
                <Text style={MyDiaryStyles.calBurnedTextStyle}>{t("Carbs_Text_Label")}</Text>
                <View style={MyDiaryStyles.colorLineStyle}>
                  <View style={MyDiaryStyles.colorLineOfLineStyle}>
                  </View>
                </View>
                <Spacing space={SH(2)} />
                <Text style={MyDiaryStyles.calBurnedLightTextStyle}>{t("Calburn_1")}</Text>
              </View>
              <View style={MyDiaryStyles.CalBurnedTypeBox}>
                <Text style={MyDiaryStyles.calBurnedTextStyle}>{t("Protein_Text_Label")}</Text>
                <View style={[MyDiaryStyles.colorLineStyle, MyDiaryStyles.colorProtineLineStyle]}>
                  <View style={[MyDiaryStyles.colorLineOfLineStyle, MyDiaryStyles.colorProteinLineOfLineStyle]}>
                  </View>
                </View>
                <Spacing space={SH(2)} />
                <Text style={MyDiaryStyles.calBurnedLightTextStyle}>{t("Calburn_2")}</Text>
              </View>
              <View style={MyDiaryStyles.CalBurnedTypeBox}>
                <Text style={MyDiaryStyles.calBurnedTextStyle}>{t("Fat_Text_Label")}</Text>
                <View style={[MyDiaryStyles.colorLineStyle, MyDiaryStyles.colorFatLineStyle]}>
                  <View style={[MyDiaryStyles.colorLineOfLineStyle, MyDiaryStyles.colorFalLineOfLineStyle]}>
                  </View>
                </View>
                <Spacing space={SH(2)} />
                <Text style={MyDiaryStyles.calBurnedLightTextStyle}>{t("Calburn_3")}</Text>
              </View>
            </View>
          </View>
          <Spacing space={SH(30)} />
          <View style={[MyDiaryStyles.Pad20, MyDiaryStyles.FlexRowJuSPBTn]}>
            <Text style={MyDiaryStyles.TitleForCourseStyle}>{t("Meals_Today_Label")}</Text>
            <TouchableOpacity style={[MyDiaryStyles.flexRowAlCent, MyDiaryStyles.TouchableHeight]}>
              <Text style={MyDiaryStyles.SeeAllTextStyle}>{t("See_All_Label")}</Text>
              <VectoreIcons icon="MaterialIcons" name="arrow-right-alt" size={SF(25)} color={Colors.black_text_color} />
            </TouchableOpacity>
          </View>
          <Spacing space={SH(20)} />
          <FlatList
            data={mealTodayDaya}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (<MealsTodayFlatFun item={item} index={index} onPress={()=> navigation.navigate(RouteName.DIET_PLAN_SCREEN)} />)}
            contentContainerStyle={MyDiaryStyles.MealTodayContainerStyle}
          />
          <Spacing />
        </View>
      </ScrollView>
    </Container>
  );
};
export default SearchTab;
