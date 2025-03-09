import { StyleSheet } from 'react-native';
import { Colors, Fonts, SF, SH, SW, widthPercent } from '../../utils';

export default DietPlanStyles = (Colors) => StyleSheet.create({
// export default StyleSheet.create({
    Container: {
        width: '100%',
        height: 'auto',
    },
    HeaderBox: {
        width: '100%',
        paddingBottom: SH(40),
        paddingHorizontal: SW(20),
        borderBottomLeftRadius: SW(70),
        position: 'relative'
    },
    HeaderTopStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    HeaderTitleStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(22),
        color: Colors.white_text_color
    },
    HomeSearchInput: {
        borderWidth: SW(0),
        fontSize: SF(15),
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
    Tab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SW(15),
        position: 'absolute',
        bottom: SH(0),
        left: SW(50)
    },
    VideoTabText: {
        color: Colors.chinese_silver,
        fontSize: SF(16),
        marginHorizontal: SW(8),
        lineHeight: SH(45),
        fontFamily: Fonts.OpenSans_Regular,
        borderColor: 'transparent',
        borderBottomWidth: SW(3),
    },
    activeBorder: {
        borderColor: Colors.white_text_color,
        borderBottomWidth: SW(3),
        color: Colors.white_text_color,
    },
    padH20: {
        paddingHorizontal: SW(20)
    },
    QueationTitleStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(17),
        color: Colors.gray_text_color
    },
    DietInfoBoxStyle: {
        paddingHorizontal: SW(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        paddingVertical: SH(17)
    },
    flexRowAlcen: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    TitleStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(20),
        color: Colors.black_text_color
    },
    TotlaKcalStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(20),
        color: Colors.cornflower_blue
    },
    drawerTotlaKcalStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(25),
        color: Colors.cornflower_blue
    },
    KcalStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(15),
        color: Colors.cornflower_blue
    },
    PlusIconBoxStyle: {
        width: SW(25),
        height: SW(25),
        borderRadius: SW(100),
        backgroundColor: Colors.cornflower_blue_rgba,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: SW(15)
    },
    recentContainerStyel: {
        paddingTop: SH(10),
        paddingBottom: SH(20)
    },
    infoStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(15),
        color: Colors.gray_text_color
    },
    bgImageStyle: {
        width: '100%',
        height: '100%'
    },
    DetailsHeaderBoxStyle: {
        width: '100%',
        height: SH(300),
        position: 'relative'
    },
    detailsTopHeaderStyle: {
        position: 'absolute',
        paddingHorizontal: SW(20),
        width: '100%',
        top: SH(50)
    },
    HeaderIconBoxStyle: {
        width: SW(40),
        height: SW(40),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white_rgba,
        borderRadius: SW(10)
    },
    detailsHeaderBox: {
        height: '100%',
        position: 'absolute',
        zIndex: 1,
        width: '100%'
    },

    RbSheetBoxStyle: {
        width: '100%',
        height: '100%'
    },
    drawerTitleStyle: {
        fontFamily: Fonts.OpenSans_Bold,
        fontSize: SF(26),
        color: Colors.black_text_color
    },
    currentDateStyle: {
        fontFamily: Fonts.Poppins_Regular,
        fontSize: SF(15),
        color: Colors.black_text_color
    },
    flexJusSpBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    dataBoxStyle: {
        backgroundColor: Colors.bgwhite,
        position: 'relative',
        top: SH(-25),
        zIndex: 111,
        borderTopEndRadius: SW(50),
        height: '100%'
    },

    rowBack: {
        alignItems: 'center',
        backgroundColor: Colors.bgwhite,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: SW(5),
    },
    actionButton: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: SW(75),
    },
    deleteBtn: {
        backgroundColor: Colors.red,
        right: 0,
    },
    addMoreBtnStyle: {
        width: '60%',
        alignSelf: 'center'
    },
    NutritionStyel: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.gray_text_color
    },
    energySTyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.black_text_color
    },
    CommonHeaderStyel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.cornflower_blue_rgba,
        paddingVertical: SH(5),
        marginHorizontal: SW(20),
        paddingHorizontal: SW(20),
    },
    CommonDataBoxStyel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: SH(5),
        paddingHorizontal: SW(20),
        paddingLeft: SW(35),
        paddingVertical: SH(5)
    },
    tabletotleRowStyel: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.black_text_color
    },
    nutRowDataStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(18),
        color: Colors.gray_text_color
    },
    FlatBoxStyle: {
        backgroundColor: Colors.cornflower_blue_rgba01,
        paddingVertical: SW(10),
        marginHorizontal: SW(20)
    },
    IconRoundStyle: {
        marginHorizontal: SW(5),
    },
    DropdownStyles: {
        width: '100%%'
    },
    ItemAddInpute: {
        backgroundColor: Colors.bgwhite,
        margin: 0,
        padding: 0,
        height: SH(45),
        borderRadius: SW(100),
        paddingHorizontal: SW(10),
        position: 'relative',
        left: SW(-10),
        width: '50%'
    },
    inputBorderStyle: {
        borderWidth: SW(1),
        width: '50%',
        textAlign: 'right'
    },
    itemTitleStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(16),
        color: Colors.gray_text_color
    },
    itemSummuryBox: {
        borderRadius: SW(7),
        backgroundColor: Colors.cornflower_blue_rgba,
        paddingHorizontal: SW(20),
        paddingVertical: SH(15),
    },
    itemSummuryTextStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(14),
        color: Colors.cornflower_blue
    },
    heightFull: {
        height: '100%'
    },
    deleteBtnStyle: {
        width: widthPercent(40),
        backgroundColor: Colors.red_rgba,
        shadowColor: 'transparent',
        borderColor: Colors.red,
        borderWidth: SW(1)
    },
    deleteBtnTextStyle: {
        color: Colors.red
    },
    addBtnStyle: {
        width: widthPercent(40),
    },
    TabViewBoxStyle: {
        width: '100%'
    },
    titleStyle: {
        fontSize: SF(12),
        color: Colors.white_text_color,
        padding: 0,
        width: SW(200),
        margin: 0
    },
    inActivetitleStyle: {
        fontSize: SF(12),
        color: Colors.chinese_silver,
        padding: 0,
        width: SW(200),
        margin: 0
    }




});