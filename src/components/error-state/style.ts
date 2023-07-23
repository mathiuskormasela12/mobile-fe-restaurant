// ========= Empty State Style
// import all packages
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  container: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: generateSize(70, 'width'),
    height: generateSize(25, 'height'),
  },
  text: {
    marginTop: generateSize(2, 'height'),
    fontFamily: Fonts.base,
    color: Colors.dark,
    textAlign: 'center',
    fontSize: generateSize(5, 'width'),
  },
});

export default style;
