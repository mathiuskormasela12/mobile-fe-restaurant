// ========= Title Style
// import all packages
import {StyleSheet} from 'react-native';

// import all themes
import {Colors, Fonts} from '../../themes';

// import all helpers
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  title: {
    fontFamily: Fonts.base,
    fontSize: generateSize(6.2, 'width'),
    color: Colors.black,
  },
});

export default style;
