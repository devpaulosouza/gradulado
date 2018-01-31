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
  },
  subTitle: {
    fontSize: fonts.subheading,
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
});

export default style;
