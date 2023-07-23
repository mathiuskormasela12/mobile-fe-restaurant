// ========= Loading Style
// import all packages
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loading: {},
  text: {
    fontFamily: Fonts.base,
    color: Colors.dark,
    fontSize: generateSize(4.2, 'width'),
    marginTop: generateSize(2, 'height'),
  },
});

export default style;
