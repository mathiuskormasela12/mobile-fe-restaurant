// ========= Restaurant Management Hook
// import all packages
import {useEffect} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';

// import all types
import {ScreenName} from '../../../types';
import {RootStackParamList} from './types';

// import redux actions
import {
  deleteReservation,
  fetchRestaurantManagement,
} from '../../../redux/features/restaurantManagement.slice';

export const useRestaurantManagenet = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const loading: boolean = useSelector(
    (state: RootState) => state.restaurantManagementReducer.loading,
  );
  const restaurantManagements = useSelector(
    (states: RootState) => states.restaurantManagementReducer.data,
  );
  const error = useSelector(
    (states: RootState) => states.restaurantManagementReducer.error,
  );

  const handleNavigate = (screen: ScreenName): void => {
    navigation.navigate(screen);
  };

  const handleDeleteReservation = (reservationId: string): void => {
    dispatch(deleteReservation(reservationId));
  };

  useEffect(() => {
    dispatch(fetchRestaurantManagement());
  }, [dispatch]);

  return {
    handleNavigate,
    loading,
    restaurantManagements,
    error,
    handleDeleteReservation,
  };
};
