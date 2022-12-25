import { StyleSheet } from 'react-native';
import { colors, fonts, fontSizes } from '../../contants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 208,
    borderTopColor: colors.gray300,
    borderTopWidth: 1
  },
  title: {
    marginTop: 16,
    color: colors.gray300,
    fontFamily: fonts.interBold,
    fontSize: fontSizes.medium,
  },
  subTitle: {
    color: colors.gray300,
    fontFamily: fonts.interRegular,
    fontSize: fontSizes.medium,
  }
});
