import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default AboutSelfStyle = (Colors) => StyleSheet.create({
  // export default StyleSheet.create({
  textcenterview: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: SW(15),
  },
  Text: {
    color: Colors.black_text_color,
    fontSize: SF(25),
    textAlign: 'center',
    fontFamily: Fonts.RobotoCondensed_Regular
  },
  TextBold: {
    fontFamily: Fonts.RobotoCondensed_Bold
  },
  TextNormal: {
    color: Colors.black_text_color,
    fontSize: SF(20),
    textAlign: 'center',
    lineHeight: SH(23),
    fontFamily: Fonts.RobotoCondensed_Regular
  },
  yourSelfRoundMainBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  yourSelfRoundBox: {
    width: SW(120),
    height: SW(120),
    backgroundColor: Colors.gray_text_color,
    borderRadius: SW(120),
    justifyContent: 'center',
    alignItems: 'center',
  },
  yourSelfRoundActiveBox: {
    width: SW(120),
    height: SW(120),
    backgroundColor: Colors.theme_background,
    borderRadius: SW(120),
    justifyContent: 'center',
    alignItems: 'center', 
  },
  yourSelfRoundText: {
    color: Colors.white_text_color,
    fontSize: SF(20),
    textAlign: 'center',
    fontFamily: Fonts.RobotoCondensed_Bold
  },
  nextButton: {
    width: SW(150),
    alignSelf: 'flex-end'
  },
  buttonView: {
    paddingHorizontal: SW(20)
  },
  yourSelfRoundImage: {
    width: SW(30),
    height: SH(30),
    tintColor: Colors.white_text_color,
  },
  selectionRoundBox: {
    width: SW(200),
    position: 'absolute',
    top: SH(-25)
  }
});