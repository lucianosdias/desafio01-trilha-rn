import { StyleSheet } from 'react-native';
import { colors, fonts, fontSizes } from '../../contants';

export const styles = StyleSheet.create({
  summary: {
    backgroundColor: colors.gray600,
    paddingHorizontal: 24,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontFamily: fonts.interBold,
    fontSize: fontSizes.medium,
  },
  createdText: {
    color: colors.blue,
  },
  doneText: {
    color: colors.purple,
  },
  counter: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    backgroundColor: colors.gray400,
    color: colors.white
  }
});
