// ========= Table Availability Hooks
// import all packages
import {useEffect} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';

// import all types
import {ScreenName} from '../../../types';
import {RootStackParamList} from './types';

// import redux actions
import {fetchTableAvailabilities} from '../../../redux/features/tableAvailbilities.slice';

export const useTableAvailability = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const loading: boolean = useSelector(
    (state: RootState) => state.tableAvailbilitiesReducer.loading,
  );
  const tableAvailbilities = useSelector(
    (states: RootState) => states.tableAvailbilitiesReducer.data,
  );
  const error = useSelector(
    (states: RootState) => states.tableAvailbilitiesReducer.error,
  );

  const handleNavigate = (screen: ScreenName, tableId?: string): void => {
    if (tableId?.length) {
      navigation.navigate(screen, {tableId: tableId ?? ''});
    } else {
      navigation.navigate(screen);
    }
  };

  useEffect(() => {
    dispatch(fetchTableAvailabilities());
  }, [dispatch]);

  return {
    handleNavigate,
    loading,
    tableAvailbilities,
    error,
  };
};
