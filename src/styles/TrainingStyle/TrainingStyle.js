import { StyleSheet } from 'react-native';
import { Colors, Fonts, SF, SH, SW, widthPercent } from '../../utils';

export default TrainingStyle = (Colors) => StyleSheet.create({
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
    TouchableHeight: {
        height: SH(30),
    },
    SeeAllTextStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(16),
        color: Colors.theme_background,
        paddingRight: SW(10)
    },
    TrainingBannerStyle: {
        width: '100%',
        height: SH(190),
        position: 'relative',
        borderRadius: SW(10),
        borderTopEndRadius: SW(70),
        overflow: 'hidden'
    },
    LinearGradientBottom: {
        // position: 'absolute'
        height: '100%'
    },
    TextBoxStyle: {
        position: 'absolute',
        zIndex: 1,
        top: SH(0),
        left: SW(0),
        width: '100%',
        padding: SW(15)
    },
    SmallTitle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(14),
        color: Colors.white_text_color
    },
    TrainiBannerTitleStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(20),
        color: Colors.white_text_color
    },
    PlayBtnStyle: {
        width: SW(70),
    },
    BtnBoxStyle: {
        position: 'absolute',
        bottom: SH(10),
        right: SW(-20),
        zIndex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 15,
    },
    TimerBoxStyle: {
        position: 'absolute',
        bottom: SH(20),
        left: SW(15),
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    SmallBannerBox: {
        borderRadius: SW(10),
        backgroundColor: Colors.bgwhite,
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    width30: {
        width: '30%'
    },
    width70: {      
        width: '70%',
        justifyContent: 'flex-start',
        padding: SH(15)
    },
    SmallBannerTitleStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.theme_background
    },
    SmallBannerTaglineStyel: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(15),
        color: Colors.gray_text_color
    },
    SamllBannerImgStyle: {
        width: SW(120),
        minHeight: SH(95),
        borderTopLeftRadius: SW(10),
        borderBottomLeftRadius: SW(10),
        overflow: 'hidden'
    },
    IconStyel: {
        width: SW(150),
        height: SH(150),
        position: 'absolute',
        top: SH(-50),
        left: SW(-20)
    },
    areaFocusBoxStyle: {
        width: '44%',
        height: SH(170),
        backgroundColor: Colors.bgwhite,
        shadowColor: Colors.theme_background,
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: .5,
        shadowRadius: Platform.OS === 'ios' ? 2 : 100,
        elevation: Platform.OS === 'ios' ? 1 : 7,
        overflow: 'hidden',
        borderRadius: SW(7),
        marginHorizontal: SW(10),
        marginVertical: SH(15),
        justifyContent: 'center',
        alignItems: 'center'
    },
    WorkOutStyle: {
        width: SW(70),
        height: SH(70)
    },
    WorkNameStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.black_text_color
    }


});