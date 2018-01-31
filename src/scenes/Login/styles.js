import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../theme';

const style = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: metrics.margin,
  },
  logo: {
    width: 128,
    height: 128,
  },
  title: {
    fontSize: fonts.display2,
    fontFamily: 'Roboto-Thin',
  },
  subTitle: {
    fontSize: fonts.subheading,
    fontFamily: 'Roboto-Thin',
  },
  center: {
    alignItems: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
  },
  button: {
    marginTop: metrics.bigSpacing,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 12,
  },
  errorText: {
    color: colors.error,
    fontSize: fonts.caption,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.primary,
  },
  input: {
    flex: 1,
  },
  iconInput: {
    marginRight: metrics.smallSpacing,
  },
});

export default style;
