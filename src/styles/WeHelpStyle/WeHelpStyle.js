import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../../utils';

export default WeHelpStyle = (Colors) => StyleSheet.create({
  textcenterview: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: SW(15),
  },
  Text: {
    color: Colors.theme_background,
    fontSize: SF(35),
    textAlign: 'center',
    fontFamily: Fonts.RobotoCondensed_Regular
  },
  TextBold: {
    fontFamily: Fonts.RobotoCondensed_Bold
  },
  TextNormal: {
    color: Colors.black_text_color,
    fontSize: SF(25),
    textAlign: 'center',
    fontFamily: Fonts.RobotoCondensed_Regular
  },
  RoundActiveMainBox: {
    backgroundColor: Colors.theme_background,
  },
  MainBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.chinese_silver,
    paddingHorizontal: SW(40),
    paddingVertical: SH(15),
    width: "85%",
    alignSelf: 'center',
    borderRadius: SH(50)
  },
  MainBoxTextView: {
    textAlign: "right",
    alignItems: 'flex-start'
  },
  rightImageStyle: {
    width: SW(30),
    height: SH(30)
  },
  buttonBigText: {
    color: Colors.theme_background,
    fontSize: SF(20),
    textAlign: 'center',
    lineHeight: SH(23),
    fontFamily: Fonts.RobotoCondensed_Bold
  },
  buttonBigTextActive: {
    color: Colors.white_text_color,
  },
  buttonSmallText: {
    color: Colors.white_text_color,
    fontSize: SF(13),
    textAlign: 'center',
    lineHeight: SH(15),
    fontFamily: Fonts.RobotoCondensed_Regular
  },
  nextButton: {
    width: SW(150),
    alignSelf: 'flex-end',
  },
  buttonView: {
    paddingHorizontal: SW(20)
  },
  buttonMainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

});