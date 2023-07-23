// ========= Table Availability Hooks
// import all packages
import {useEffect, useRef} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';

// import all types
import {ILoadingRef, ScreenName} from '../../../types';
import {RootStackParamList} from './types';

export const useTableAvailability = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const loadingRef = useRef<ILoadingRef>();

  const handleNavigate = (screen: ScreenName): void => {
    navigation.navigate(screen);
  };

  useEffect(() => {
    setTimeout(() => {
      loadingRef.current?.handleLoading(false);
    }, 10000);
  }, []);

  return {
    handleNavigate,
    loadingRef,
  };
};
