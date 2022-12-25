import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../contants';

export const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    padding: 16,
    height: 54,
    backgroundColor: colors.gray500,
    color: colors.white,
    borderColor: colors.gray700,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    marginRight: 4,
    fontSize: fontSizes.large,
  }
});
