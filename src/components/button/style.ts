// ========= Button Style
// import all packages
import {StyleSheet} from 'react-native';

// import all themes
import {Colors, Fonts} from '../../themes';

// import all helpers
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  btn: {
    width: '100%',
    height: generateSize(8.2, 'height'),
    borderRadius: generateSize(2.2, 'width'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: generateSize(4.6, 'width'),
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  danger: {
    backgroundColor: Colors.danger,
  },
});

export default style;
