import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default MyDiaryStyle = (Colors)=> StyleSheet.create({
// export default StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%'
    },
    Pad20: {
        paddingHorizontal: SW(20)
    },
    TitleForCourseStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(20),
        color: Colors.black_text_color,
    },
    FlexRowJuSPBTn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    SeeAllTextStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(16),
        color: Colors.theme_background,
        paddingRight: SW(10)
    },
    flexRowAlCent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    TouchableHeight: {
        height: SH(30),
    },
    DietShowBoxStyle: {
        borderRadius: SW(10),
        borderTopRightRadius: SW(70),
        // height: SH(250),
        backgroundColor: Colors.bgwhite,
        shadowColor: Colors.theme_background,
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        marginHorizontal: SW(20),
        padding: SW(20)
    },
    width50: {
        width: '50%'
    },
    eatenBoxStyle: {
        borderLeftWidth: SW(2),
        borderLeftColor: Colors.vivid_sky_blue,
        paddingLeft: SW(5)
    },
    kcalBoxStyle: {
        borderLeftWidth: SW(2),
        borderLeftColor: Colors.red_rgba,
        paddingLeft: SW(5)
    },
    DietCommonTextTyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.gray_text_color,
    },
    IconStyle: {
        width: SW(20),
        height: SH(20)
    },
    KcalNumberStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(25),
        color: Colors.black_text_color,
        paddingLeft: SW(10)
    },
    kcalStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(16),
        color: Colors.gray_text_color,
    },
    lineStyle: {
        width: '100%',
        backgroundColor: Colors.light_gray_text_color,
        height: SW(1)
    },
    calBurnedTextStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(16),
        color: Colors.black_text_color,
        paddingVertical: SH(5)
    },
    colorLineStyle: {
        width: '100%',
        height: SH(4),
        backgroundColor: Colors.cornflower_blue_rgba,
        borderRadius: SW(50),
        position: 'relative'
    },
    colorLineOfLineStyle: {
        width: '75%',
        height: SH(4),
        backgroundColor: Colors.cornflower_blue,
        borderRadius: SW(50),
    },
    calBurnedLightTextStyle: {
        fontFamily: Fonts.Poppins_Regular,
        fontSize: SF(12),
        color: Colors.gray_text_color,
    },
    CalBurnedTypeBox: {
        width: '20%'
    },
    colorProtineLineStyle: {
        backgroundColor: Colors.hot_pink_rgba
    },
    colorProteinLineOfLineStyle: {
        backgroundColor: Colors.hot_pink
    },
    colorFatLineStyle: {
        backgroundColor: Colors.lemonyellow_rgba
    },
    colorFalLineOfLineStyle: {
        backgroundColor: Colors.lemonyellow
    },
    mealTodayBox: {
        width: SW(180),
        height: SH(250),
        borderRadius: SW(10),
        borderTopEndRadius: SW(90),
        position: 'relative',
        marginRight: SW(15),
    },
    LinearGradientBottom: {
        height: '100%',
        width: '100%',
        borderRadius: SW(10),
        borderTopEndRadius: SW(90),
        overflow: 'hidden',
        position: 'absolute'
    },
    MealTodayContainerStyle: {
        paddingLeft: SW(20),
        paddingRight: SW(5)
    },
    mealIconStyle: {
        width: SW(40),
        height: SH(40),
        position: "absolute",
        zIndex: 99,
    },
    mealIconBoxStyle: {
        width: SW(70),
        height: SW(70),
        backgroundColor: Colors.white_rgba,
        borderRadius: SW(100),
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        zIndex: 99,
        top: SH(10),
        left: SW(10)
    },
    mealTitleStyel: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(20),
        color: Colors.white_text_color,
        paddingHorizontal: SW(20)
    },
    mealInfoStyel: {
        fontFamily: Fonts.Poppins_Regular,
        fontSize: SF(17),
        color: Colors.white_text_color,
        paddingHorizontal: SW(20)
    },
    burnedkcalNumStyel: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(25),
        color: Colors.white_text_color,
        paddingHorizontal: SW(20)
    },
    smallTestStyle:{
        fontFamily: Fonts.Poppins_Regular,
        fontSize: SF(15),
        color: Colors.white_text_color,
    }
});