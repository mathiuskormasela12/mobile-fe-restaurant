// ========= Badge Style
// import all packages
import {Platform, StyleSheet} from 'react-native';

// import all themes
import {Colors, Fonts} from '../../themes';

// impor all helpers
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  badge: {
    paddingVertical: generateSize(0.5, 'height'),
    borderRadius: generateSize(2.5, 'width'),
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.base,
    textAlign: 'center',
    fontSize: generateSize(3.1, 'width'),
  },
  primary: {
    paddingHorizontal: generateSize(2, 'width'),
    backgroundColor: Colors.primary,
  },
  danger: {
    backgroundColor: Colors.danger,
    paddingHorizontal: generateSize(Platform.OS === 'ios' ? 1.1 : 1, 'width'),
  },
});

export default style;
