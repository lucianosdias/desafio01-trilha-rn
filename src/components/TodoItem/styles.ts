import { StyleSheet } from 'react-native';
import { colors, fonts, fontSizes } from '../../contants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.gray500,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.gray400,
    height: 64,
    marginBottom: 8,
  },
  text: {
    color: colors.white,
    marginHorizontal: 8,
    fontFamily: fonts.interRegular,
    fontSize: fontSizes.medium,
    flex: 1,
    flexWrap: "wrap",
  },
  iconButton: {
    height: 32,
    width: 32,
    alignItems: "center",
    justifyContent: "center",
  }
});

