// ========= Table Availability Hooks
// import all packages
import {NavigationProp, useNavigation} from '@react-navigation/native';

// import all types
import {ScreenName} from '../../../types';
import {RootStackParamList} from './types';

export const useTableAvailability = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigate = (screen: ScreenName): void => {
    navigation.navigate(screen);
  };

  return {
    handleNavigate,
  };
};
