import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default WorkoutDetailStyle = (Colors) => StyleSheet.create({
  // export default StyleSheet.create({
  textcenterview: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: SW(15),
  },
  setbgimage: {
    height: SH(300),
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: SW(20)
  },
  viewImageBoxChallengeInnerView: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ImageTitle: {
    color: Colors.black_text_color,
    fontSize: SF(23),
    paddingHorizontal: SW(10),
    fontFamily: Fonts.OpenSans_Regular
  },
  ImageTitleBG: {
    color: Colors.black_text_color,
    fontSize: SF(30),
    fontWeight: '600',
    backgroundColor: Colors.quick_silver,
    width: SW(180),
    textAlign: 'center',
    paddingHorizontal: SW(10)
  },
  ImageTitleText: {
    color: Colors.black_text_color,
    fontSize: SF(20),
    fontWeight: '600',
    paddingHorizontal: SW(10)
  },
  leftArrowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: SW(-20)
  },
  leftArrow: {
    width: SW(60),
    backgroundColor: Colors.gray_text_color
  },
  ImagebottomContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ImageTitleWorkMinNumber: {
    color: Colors.theme_background,
    fontSize: SF(29),
    fontFamily: Fonts.OpenSans_Medium
  },
  ImageTitleWorkMin: {
    color: Colors.black_text_color,
    fontSize: SF(19),
    fontFamily: Fonts.OpenSans_Regular
  },
  ImagebottomContentInnerLeft: {
    paddingLeft: SW(40)
  },
  ImagebottomContentDesc: {
    color: Colors.black_text_color,
    fontSize: SF(16),
    fontFamily: Fonts.OpenSans_Regular,
    lineHeight: SF(25),
  },
  exercise: {
    width: SW(70),
    borderRadius: SW(50),
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  workoutList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutListText: {
    color: Colors.black_text_color,
    fontSize: SF(18),
    fontFamily: Fonts.OpenSans_Medium
  },
  workoutListTextTime: {
    color: Colors.pale_silver,
    fontSize: SF(18),
    fontFamily: Fonts.OpenSans_Medium
  },
  br: {
    borderBottomColor: Colors.gray_text_color,
    borderBottomWidth: SH(1.5),
    height: 0,
    opacity: 0.4,
    width: '100%',
    borderStyle: 'dotted'
  },
  RestBox: {
    position: 'relative'
  },
  RestChildBoxStyle: {
    paddingHorizontal: SW(15),
    paddingVertical: SH(5),
    backgroundColor: Colors.cornflower_blue_rgba,
    borderRadius: SW(25),
  },
  RestStyle: {
    color: Colors.navyblue,
    fontSize: SF(14),
    fontFamily: Fonts.OpenSans_Medium
  },
  workoutListMainView: {
    paddingHorizontal: SW(20),
    paddingTop: SH(20)
  },
  Width65: {
    width: '75%',
    paddingLeft: SW(15)
  },
  Width35: {
    width: '25%',
    backgroundColor: Colors.off_gray,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  HeaderAndBannerBox: {
    overflow: 'hidden',
    position: 'relative',
    paddingTop: SH(25),
    height: SH(300)
  },
  LinearGradientBottom: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  flexRowJusSpBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pad20: {
    paddingHorizontal: SW(20)
  },
  TrainiBannerTitleStyle: {
    fontFamily: Fonts.OpenSans_Medium,
    fontSize: SF(22),
    color: Colors.white_text_color,
  },
  TimerBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white_rgba,
    paddingVertical: SH(5),
    paddingHorizontal: SW(10),
    borderRadius: SW(8),
    marginRight: SW(10)
  },
  SmallTitle: {
    fontFamily: Fonts.OpenSans_Regular,
    fontSize: SF(13),
    color: Colors.white_text_color,
    paddingLeft: SW(5)
  },
  flexRowAlcent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  WhiteBoxShapStyle: {
    width: '100%',
    // height: SH(40),
    backgroundColor: Colors.bgwhite,
    borderTopEndRadius: SW(70),
    position: 'absolute',
    bottom: SH(15),
    paddingHorizontal: SW(20),
    paddingTop: SH(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  WorkoukTitleStyle: {
    fontFamily: Fonts.OpenSans_Medium,
    fontSize: SF(19),
    color: Colors.black_text_color,
  },
  WorkoutSetStyle: {
    fontFamily: Fonts.OpenSans_Regular,
    fontSize: SF(14),
    color: Colors.gray_text_color,
    paddingLeft: SW(5)
  },

});