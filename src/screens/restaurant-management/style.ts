// ========= Restaurant Management Style
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
  cardList: {
    flex: 7,
  },
  main: {
    flex: 5.5,
    backgroundColor: Colors.white,
  },
  footer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  cardContainer: {
    marginBottom: generateSize(1.2, 'height'),
  },
  title: {
    fontFamily: Fonts.base,
    color: Colors.dark,
    fontSize: generateSize(3.7, 'width'),
    marginBottom: generateSize(2, 'height'),
  },
});

export default style;
