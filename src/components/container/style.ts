// ========= Container Style
// import all packages
import {StyleSheet} from 'react-native';

// import all helpers
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  container: {
    width: generateSize(90, 'width'),
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerFullHeight: {
    width: generateSize(90, 'width'),
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
  },
});

export default style;
