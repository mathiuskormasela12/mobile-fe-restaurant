// ========== Input Style
// import all packages
import {StyleSheet} from 'react-native';

// import all themes
import {Colors, Fonts} from '../../themes';
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  container: {},
  input: {
    borderWidth: 0.7,
    borderStyle: 'solid',
    fontSize: generateSize(3.7, 'width'),
    borderRadius: generateSize(1, 'width'),
    height: generateSize(6.5, 'height'),
    paddingLeft: generateSize(2, 'width'),
    color: Colors.dark,
  },
  inputNormal: {
    borderColor: 'gray',
  },
  inputError: {
    borderColor: Colors.danger,
  },
  error: {
    fontFamily: Fonts.base,
    marginTop: generateSize(0.5, 'height'),
    fontSize: generateSize(3.2, 'width'),
    color: Colors.danger,
  },
});

export default style;
