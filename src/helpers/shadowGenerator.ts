// =========== Shadow Generator
// import all modules
import {Platform} from 'react-native';
import {ShadowGeneratorFunc} from '../types';

export const shadowGenerator: ShadowGeneratorFunc = option => {
  switch (Platform.OS) {
    case 'android':
      return {
        elevation: option?.elevation ?? 1,
        shadowColor: option.shadowColor,
      };

    default:
      return {
        shadowColor: option.shadowColor,
        shadowOffset: {
          width: option?.xOffset ?? 0,
          height: option?.yOffset ?? 0,
        },
        shadowOpacity: option.shadowOpacity,
        shadowRadius: option.shadowRadius,
      };
  }
};
