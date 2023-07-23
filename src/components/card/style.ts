// ========= Card Style
// import all packages
import {StyleSheet} from 'react-native';

// import all themes
import {Colors, Fonts} from '../../themes';
import {generateSize} from '../../helpers';
import {shadowGenerator} from '../../helpers/shadowGenerator';

const style = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    ...shadowGenerator({
      xOffset: 0,
      yOffset: 0,
      shadowColor: Colors.dark,
      shadowOpacity: 0.2,
      shadowRadius: 3.5,
      elevation: 1,
    }),
    borderWidth: 0.3,
    borderStyle: 'solid',
    borderColor: 'gray',
    height: 'auto',
    paddingVertical: generateSize(2, 'height'),
    paddingHorizontal: generateSize(3.5, 'width'),
    borderRadius: generateSize(1.6, 'width'),
  },
  tableCode: {
    fontFamily: Fonts.base,
    fontSize: generateSize(4, 'width'),
    marginBottom: generateSize(0.7, 'height'),
    color: Colors.dark,
  },
  location: {
    fontFamily: Fonts.base,
    fontSize: generateSize(3.5, 'width'),
    color: Colors.dark,
  },
  header: {
    flex: 3,
  },
  aside: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  availableText: {
    fontFamily: Fonts.base,
    backgroundColor: Colors.primary,
    borderRadius: generateSize(2, 'width'),
    color: Colors.white,
    fontSize: generateSize(3, 'width'),
    lineHeight: generateSize(3.2, 'height'),
    width: generateSize(20, 'width'),
    textAlign: 'center',
  },
  unavailableText: {
    fontFamily: Fonts.base,
    fontSize: generateSize(3, 'width'),
    backgroundColor: Colors.danger,
    borderRadius: generateSize(2, 'width'),
    color: Colors.white,
    lineHeight: generateSize(3.2, 'height'),
    width: generateSize(23, 'width'),
    textAlign: 'center',
  },
});

export default style;
