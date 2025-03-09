import { StyleSheet } from 'react-native';
import { Colors, Fonts, SF, SH, SW } from '../../utils';

export default Login = (Colors) => StyleSheet.create({
// export default StyleSheet.create({

    Container: {
        width: '100%',
        height: 'auto',
    },
    LinearGradientBottom: {
        position: 'absolute',
        bottom: SH(0),
        height: '100%',
        zIndex: 1
    },
    HomeHeaderBox: {
        height: SH(250),
        borderBottomLeftRadius: SW(70),
        overflow: 'hidden',
        position: 'relative'
    },
    homebgImageStyle: {
        position: 'absolute',
        width: SW(250),
        height: SH(250),
        right: SW(0)
    },
    titleHeadingStyle: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(25),
        color: Colors.white_text_color,
    },
    HomeInfoBoxStyle: {
        position: 'relative',
        paddingHorizontal: SW(25),
        zIndex: 1
    },
    HomeTaglineStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(27),
        color: Colors.white_text_color,
    },
    HomeSearchInput: {
        borderWidth: SW(0),
        fontSize: SF(14),
    },
    InputContainer: {
        backgroundColor: Colors.bgwhite,
        margin: 0,
        padding: 0,
        height: SH(45),
        borderRadius: SW(100),
        paddingHorizontal: SW(10),
        position: 'relative',
        left: SW(-10)
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

    beginerFlatBoxStyle: {
        width: SW(280),
        height: SH(180),
        borderRadius: SW(10),
        borderTopEndRadius: SW(70),
        overflow: 'hidden',
        position: 'relative',
        marginRight: SW(15)
    },
    homeBiginnerBgImgStyle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: SW(0)
    },
    BiginnersInfoBoxStyle: {
        position: 'relative',
        paddingHorizontal: SW(15),
        paddingRight: SW(20),
        zIndex: 1
    },
    beginnerTitleStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.white_text_color,
    },
    beginnerSubTitleStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.white_text_color,
    },
    beginnerWorkoutNameStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(16),
        color: Colors.white_text_color,
    },
    BottomBoxShowData: {
        position: 'absolute',
        bottom: SH(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        zIndex: 1,
        width: '100%'
    },
    weeknumberStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(12),
        color: Colors.white_text_color,
    },
    weekTextStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(12),
        color: Colors.chinese_silver,
    },
    padL10: {
        paddingLeft: SW(5)
    },
    IconBoxStyle: {
        width: SW(25),
        height: SW(25),
        borderRadius: SW(7),
        backgroundColor: Colors.white_rgba,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    BeginnerContainerStyle: {
        paddingLeft: SW(20)
    }
});