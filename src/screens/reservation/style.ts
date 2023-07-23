// ========= Reservation Style
// import all packages
import {StyleSheet} from 'react-native';

// import all themes
import {Colors, Fonts} from '../../themes';

// import all helpers
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  hero: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    flex: 7,
    justifyContent: 'center',
  },
  main: {
    flex: 5.5,
    backgroundColor: Colors.white,
  },
  footer: {
    flex: 1.5,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  cardContainer: {
    marginBottom: generateSize(1.2, 'height'),
  },
  control: {
    marginBottom: generateSize(1.2, 'height'),
  },
  field: {
    marginBottom: generateSize(1, 'height'),
  },
  text: {
    fontFamily: Fonts.base,
    color: Colors.dark,
    fontSize: generateSize(3.8, 'width'),
  },
  message: {
    fontFamily: Fonts.base,
    color: Colors.primary,
    fontSize: generateSize(4.2, 'width'),
    textAlign: 'center',
  },
  link: {
    fontFamily: Fonts.bold,
    textDecorationColor: 'black',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  errorMessage: {
    fontFamily: Fonts.base,
    color: Colors.danger,
    fontSize: generateSize(4.2, 'width'),
    textAlign: 'center',
  },
  back: {
    fontFamily: Fonts.bold,
    color: Colors.primary,
    fontSize: generateSize(4.2, 'width'),
    textAlign: 'center',
    marginTop: generateSize(2, 'height'),
  },
});

export default style;
