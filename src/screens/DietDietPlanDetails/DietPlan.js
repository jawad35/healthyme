import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Container, Input, Spacing, VectoreIcons, LinearGradientComp, DietInfoBox, TabBarComponent } from '../../components';
import { DietPlanStyle } from '../../styles';
import { SF, SH, dieatSearchData } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../routes';
import { Tab, TabView } from '@rneui/themed';

const DietPlan = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const DietPlanStyles = useMemo(() => DietPlanStyle(Colors), [Colors]);
  const [searchInput, setSearchInput] = useState('');
  const [index, setIndex] = React.useState(0);
  const totalKcal = 540;

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
      <LinearGradientComp start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={[Colors.rich_black, Colors.navyblue, Colors.vivid_sky_blue,]} LinearGradientStyle={DietPlanStyles.HeaderBox}>
        <Spacing space={SH(45)} />
        <View style={DietPlanStyles.HeaderTopStyle}>
          <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
            <VectoreIcons icon="AntDesign" name="arrowleft" size={SF(25)} color={Colors.white_text_color} />
          </TouchableOpacity>
          <Text style={DietPlanStyles.HeaderTitleStyle}>{t("MealTitle_2")}</Text>
          <TouchableOpacity>
            <VectoreIcons icon="Feather" name="edit" size={SF(22)} color={Colors.white_text_color} />
          </TouchableOpacity>
        </View>
        {/* Header Search */}
        <Spacing space={SH(25)} />
        <Input
          leftIcon={<VectoreIcons icon="EvilIcons" name="search" size={SF(22)} color={Colors.gray_text_color} />}
          inputStyle={DietPlanStyles.HomeSearchInput}
          placeholder={t("Diet_Search_Placeholder_Label")}
          inputContainerStyle={DietPlanStyles.InputContainer}
          onChangeText={(inputSearch) => setSearchInput(inputSearch)}
          value={searchInput}
        />
        {/* Start Tab Bar */}
        <Spacing space={SH(5)} />
        <View style={DietPlanStyles.Tab}>
          <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
              backgroundColor: Colors.white_text_color,
            }}
            variant="defualt"
          >
            <Tab.Item
              title={t("Search_Label")}
              titleStyle={(active) => (active ? DietPlanStyles.titleStyle : DietPlanStyles.inActivetitleStyle)}
            />
            <Tab.Item
              title={t("My_Food_Label")}
              titleStyle={(active) => (active ? DietPlanStyles.titleStyle : DietPlanStyles.inActivetitleStyle)}
            />
            <Tab.Item
              title={t("Meals_Label")}
              titleStyle={(active) => (active ? DietPlanStyles.titleStyle : DietPlanStyles.inActivetitleStyle)}
            />
            <Tab.Item
              title={t("Recipes_Label")}
              titleStyle={(active) => (active ? DietPlanStyles.titleStyle : DietPlanStyles.inActivetitleStyle)}
            />
          </Tab>
        </View>
      </LinearGradientComp>


      <Spacing space={SH(30)} />
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={DietPlanStyles.TabViewBoxStyle}>
          <View>
            <Text style={[DietPlanStyles.QueationTitleStyle, DietPlanStyles.padH20]}>{t("Same_As_Yesturday_Label")}</Text>
            <Spacing space={SH(20)} />
            <View style={DietPlanStyles.DietInfoBoxStyle}>
              <Text style={DietPlanStyles.TitleStyle}>{t("MealTitle_2")}</Text>
              <View style={DietPlanStyles.flexRowAlcen}>
                <Text style={DietPlanStyles.TotlaKcalStyle}>{totalKcal} <Text style={DietPlanStyles.KcalStyle}>{t("Kcal_Label")}</Text></Text>
                <TouchableOpacity style={DietPlanStyles.PlusIconBoxStyle} onPress={() => navigation.navigate(RouteName.DIET_DETAILS)}>
                  <VectoreIcons icon="AntDesign" name="plus" size={SF(17)} color={Colors.gray_text_color} />
                </TouchableOpacity>
              </View>
            </View>
            <Spacing space={SH(30)} />
            <Text style={[DietPlanStyles.QueationTitleStyle, DietPlanStyles.padH20]}>{t("Recent_Label")}</Text>
            <Spacing space={SH(10)} />
            <FlatList
              data={dieatSearchData}
              renderItem={({ item, index }) => (<DietInfoBox item={item} onPress={() => navigation.navigate(RouteName.DIET_PLAN_SCREEN)} />)}
              contentContainerStyle={DietPlanStyles.recentContainerStyel}
            />
            <Spacing space={SH(15)} />
          </View>
        </TabView.Item>
        <TabView.Item style={DietPlanStyles.TabViewBoxStyle}>
          <View>
            <Text style={[DietPlanStyles.QueationTitleStyle, DietPlanStyles.padH20]}>{t("Same_As_Yesturday_Label")}</Text>
            <Spacing space={SH(20)} />
            <View style={DietPlanStyles.DietInfoBoxStyle}>
              <Text style={DietPlanStyles.TitleStyle}>{t("MealTitle_2")}</Text>
              <View style={DietPlanStyles.flexRowAlcen}>
                <Text style={DietPlanStyles.TotlaKcalStyle}>{totalKcal} <Text style={DietPlanStyles.KcalStyle}>{t("Kcal_Label")}</Text></Text>
                <TouchableOpacity style={DietPlanStyles.PlusIconBoxStyle} onPress={() => navigation.navigate(RouteName.DIET_DETAILS)}>
                  <VectoreIcons icon="AntDesign" name="plus" size={SF(17)} color={Colors.gray_text_color} />
                </TouchableOpacity>
              </View>
            </View>
            <Spacing space={SH(30)} />
            <Text style={[DietPlanStyles.QueationTitleStyle, DietPlanStyles.padH20]}>{t("Recent_Label")}</Text>
            <Spacing space={SH(10)} />
            <FlatList
              data={dieatSearchData}
              renderItem={({ item, index }) => (<DietInfoBox item={item} onPress={() => navigation.navigate(RouteName.DIET_PLAN_SCREEN)} />)}
              contentContainerStyle={DietPlanStyles.recentContainerStyel}
            />
            <Spacing space={SH(15)} />
          </View>
        </TabView.Item>
        <TabView.Item style={DietPlanStyles.TabViewBoxStyle}>
          <View>
            <Text style={[DietPlanStyles.QueationTitleStyle, DietPlanStyles.padH20]}>{t("Same_As_Yesturday_Label")}</Text>
            <Spacing space={SH(20)} />
            <View style={DietPlanStyles.DietInfoBoxStyle}>
              <Text style={DietPlanStyles.TitleStyle}>{t("MealTitle_2")}</Text>
              <View style={DietPlanStyles.flexRowAlcen}>
                <Text style={DietPlanStyles.TotlaKcalStyle}>{totalKcal} <Text style={DietPlanStyles.KcalStyle}>{t("Kcal_Label")}</Text></Text>
                <TouchableOpacity style={DietPlanStyles.PlusIconBoxStyle} onPress={() => navigation.navigate(RouteName.DIET_DETAILS)}>
                  <VectoreIcons icon="AntDesign" name="plus" size={SF(17)} color={Colors.gray_text_color} />
                </TouchableOpacity>
              </View>
            </View>
            <Spacing space={SH(30)} />
            <Text style={[DietPlanStyles.QueationTitleStyle, DietPlanStyles.padH20]}>{t("Recent_Label")}</Text>
            <Spacing space={SH(10)} />
            <FlatList
              data={dieatSearchData}
              renderItem={({ item, index }) => (<DietInfoBox item={item} onPress={() => navigation.navigate(RouteName.DIET_PLAN_SCREEN)} />)}
              contentContainerStyle={DietPlanStyles.recentContainerStyel}
            />
            <Spacing space={SH(15)} />
          </View>
        </TabView.Item>
        <TabView.Item style={DietPlanStyles.TabViewBoxStyle}>
          <View>
            <Text style={[DietPlanStyles.QueationTitleStyle, DietPlanStyles.padH20]}>{t("Same_As_Yesturday_Label")}</Text>
            <Spacing space={SH(20)} />
            <View style={DietPlanStyles.DietInfoBoxStyle}>
              <Text style={DietPlanStyles.TitleStyle}>{t("MealTitle_2")}</Text>
              <View style={DietPlanStyles.flexRowAlcen}>
                <Text style={DietPlanStyles.TotlaKcalStyle}>{totalKcal} <Text style={DietPlanStyles.KcalStyle}>{t("Kcal_Label")}</Text></Text>
                <TouchableOpacity style={DietPlanStyles.PlusIconBoxStyle} onPress={() => navigation.navigate(RouteName.DIET_DETAILS)}>
                  <VectoreIcons icon="AntDesign" name="plus" size={SF(17)} color={Colors.gray_text_color} />
                </TouchableOpacity>
              </View>
            </View>
            <Spacing space={SH(30)} />
            <Text style={[DietPlanStyles.QueationTitleStyle, DietPlanStyles.padH20]}>{t("Recent_Label")}</Text>
            <Spacing space={SH(10)} />
            <FlatList
              data={dieatSearchData}
              renderItem={({ item, index }) => (<DietInfoBox item={item} onPress={() => navigation.navigate(RouteName.DIET_PLAN_SCREEN)} />)}
              contentContainerStyle={DietPlanStyles.recentContainerStyel}
            />
            <Spacing space={SH(15)} />
          </View>
        </TabView.Item>
      </TabView>
    </Container>
  )
}

export default DietPlan