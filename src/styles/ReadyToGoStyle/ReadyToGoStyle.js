import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default ReadyToGoStyle = (Colors)=> StyleSheet.create({
// export default StyleSheet.create({

  textcenterview: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: SW(15),
  },
  viewImageBoxChallengeInnerView: {   
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: SW(20)
  },
  leftArrowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: SW(-20)
  },
  leftArrow: {
    width: SW(60)
  },
  ImagebottomContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageTitleBig: {
    color: Colors.theme_background,
    fontSize: SF(26),
    fontFamily: Fonts.RobotoCondensed_Bold,
    textAlign: 'center'
  },
  ImageTitleWorkMinNumber: {
    color: Colors.theme_background,
    fontSize: SF(50),
    fontFamily: Fonts.RobotoCondensed_Bold,
    textAlign: 'center'
  },
  ImageTitleWorkMin: {
    color: Colors.black_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.OpenSans_Medium,
    textAlign: 'center'

  },
  exerciseView: {
    backgroundColor: Colors.off_gray,
  },
  exercise: {
    width: SW(300),
    backgroundColor: Colors.off_gray,
    alignSelf: 'center'
  },
  leftsideArrow: {
    width: SW(50),
  },
  textCounter: {
    color: Colors.black_text_color
  },
  BottomMainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    alignContent: 'center'
  },
  counterMainView: {
    alignSelf: 'center'
  },
  counterMainViewLeft: {
    position: 'absolute',
    right: 0
  },
  counterMainViewStart: {
    width: "100%",
    height: SH(60),
    backgroundColor: Colors.black_text_color,
    position: 'relative',
    justifyContent: 'center',
    opacity: 0.9
  },
  counterMainViewStartActive: {
    width: 0,
    height: "100%",
    backgroundColor: Colors.theme_background,
    alignItems: 'flex-start',
  },
  musicplayerView: {
    width: SW(40),
    height: SH(40),
    backgroundColor: Colors.black_text_color,
    borderRadius: SH(50),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: SW(5),
  },
  musicplayerImage: {
    resizeMode: 'cover',
    width: SW(20),
    height: SH(20),
  },
  musicplayerMainView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  counterMainViewStartInnerView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    width: '100%'
  },
  setbgimage: {
    height: SH(400),
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  viewImageBoxRestInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftArrowViewMainView: {
    alignSelf: 'flex-start'
  },
  restText: {
    color: Colors.theme_background,
    fontSize: SF(35),
    fontFamily: Fonts.RobotoCondensed_Bold,
    textAlign: 'center'
  },
  restTextNumber: {
    color: Colors.black_text_color,
    fontSize: SF(20),
    fontFamily: Fonts.OpenSans_Medium,
    textAlign: 'center',
    backgroundColor: Colors.pale_silver,
    paddingHorizontal: SW(20),
    paddingVertical: SW(10),
    borderRadius: SH(20)
  },

  imageLayer: {
    height: '100%',
    width: "100%",
    position: 'absolute',
    backgroundColor: Colors.theme_backgound_black,
    left: 0,
    right: 0,
    flex: 1,
    alignSelf: 'center',
    opacity: 0.5
  },
  viewImageBoxRestInnerViewMain: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: SW(20)
  },
  colorblack_text_color: {
    color: Colors.black_text_color
  },
  nextText: {
    color: Colors.black_text_color,
    fontSize: SF(28),
    fontFamily: Fonts.RobotoCondensed_Bold,
    textAlign: 'center'
  },
  restBottomView: {
    paddingHorizontal: SW(20),
    backgroundColor: Colors.pale_silver,
    height: '100%',
    borderTopRightRadius: SH(15),
    borderTopLeftRadius: SH(15),
    marginTop: SH(-15)
  },
  restTextView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  MainView: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  colorBlack: {
    color: Colors.theme_backgound_black
  },
  restImageSize: {
    width: SW(250),
    alignSelf: 'center'
  },
  transpharentColor: {
    backgroundColor: Colors.transpharent,
  },
});