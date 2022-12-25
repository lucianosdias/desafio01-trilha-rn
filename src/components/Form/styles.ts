import { StyleSheet } from 'react-native';
import { colors } from '../../contants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray600,
    paddingHorizontal: 24,
  },
  addForm: {
    flexDirection: 'row',
    position: 'absolute',
    top: -27,
    left: 24,
  },
});
