import { StyleSheet } from 'react-native';
import { Colors, Fonts, SF, SH, SW, widthPercent } from '../../utils';

export default YourProgramStyle = (Colors) => StyleSheet.create({
// export default StyleSheet.create({

    Container: {
        width: '100%',
        height: 'auto',
    },
    LinearGradientBottom: {
        // position: 'absolute',
        // zIndex: 1,
        width: '100%',
        height: SH(100),
    },
    Pad20: {
        paddingHorizontal: SW(20)
    },
    FlexRowJuSPBTn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    TitleForCourseStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(20),
        color: Colors.black_text_color,
    },
    flexRowAlCent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Week_Label_Style: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(22),
        color: Colors.black_text_color,
    },
    SetwidStyle: {
        width: SW(85),
        marginHorizontal: SH(10),
        marginRight: SH(10),
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
        borderRadius: SW(7),
        marginVertical: SH(10)
    },

    settextstyletile: {
        borderBottomWidth: SW(0.5),
        borderBottomColor: Colors.gray_text_color,
        color: Colors.gray_text_color,
        fontSize: SF(13),
        fontFamily: Fonts.Poppins_Medium,
        paddingVertical: SH(5),
        paddingHorizontal: SW(10)
    },

    Setdigitstyle: {
        color: Colors.black_text_color,
        fontSize: SF(22),
        fontFamily: Fonts.Poppins_Medium,
        paddingHorizontal: SW(10),
        paddingVertical: SH(5)
    },

    CelenderFlatDateContainer: {
        paddingHorizontal: SW(10)
    },
    SeeAllTextStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(16),
        color: Colors.theme_background,
        paddingRight: SW(10)
    },
    WorkoutInfoBox: {
        borderRadius: SW(10),
        borderTopEndRadius: SW(70),
        width: '100%',
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
        borderRadius: SW(7),
        overflow: 'hidden'
    },
    WorkoutInfoBoxTop: {
        width: '100%',
        position: 'absolute',
        top: SH(0),
        left: SW(0),
        paddingLeft: SW(20),
        paddingVertical: SH(18),
    },
    TrainiBannerTitleStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(20),
        color: Colors.white_text_color,
    },
    WorkoutLabelStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.gray_text_color,
        paddingLeft: SW(10),
    },
    BtnBoxStyle: {
        borderTopWidth: SW(0.5),
        borderTopColor: Colors.gray_text_color
    },
    BtnStyle: {
        backgroundColor: Colors.bgwhite,
        width: '70%',
        alignSelf: 'center',
        shadowColor: 'transparent'
    },
    BtntextStyle: {
        color: Colors.theme_background
    },
    graphView: {
        backgroundColor: Colors.white_rgba,
        height: SH(250),
        overflow: 'hidden',
        paddingHorizontal: SW(20),
        paddingVertical: SH(20)

    }

});