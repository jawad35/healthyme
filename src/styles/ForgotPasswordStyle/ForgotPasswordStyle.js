import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, SF, SH, Colors, SW } from '../../utils';

export default ForgotPasswordStyle = (Colors) => StyleSheet.create({
  // export default StyleSheet.create({
  TabMinView: {
    width: '100%',
    height: '100%',
    paddingTop: SH(20),
    paddingHorizontal: SH(20),
    backgroundColor: Colors.white_text_color,
  },
  InputUnderLine: {
    backgroundColor: Colors.light_gray_text_color,
    color: Colors.black_text_color,
    width: '100%',
    height: SH(58),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SH(10),
    fontFamily: Fonts.Poppins_Medium,
    paddingHorizontal: SH(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  Marginright: {
    paddingRight: SH(6),
  },
  InputStyles: {
    width: '100%',
    color: Colors.black_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    backgroundColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
    borderWidth: 0,
    paddingTop: SH(27)
  },
  SeTextStyleForget: {
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
  },
  CenterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

});
