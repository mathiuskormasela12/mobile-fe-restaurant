// ========= Reservation Hooks
// import all packages
import {useState} from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {IForm, RootStackParamList} from './types';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import validationSchema from '../schemas/validation';
import Services from '../../../services/Services';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../redux/store';
import {fetchTableAvailabilities} from '../../../redux/features/tableAvailbilities.slice';
import {fetchRestaurantManagement} from '../../../redux/features/restaurantManagement.slice';

export const useReservation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    params: {tableId},
  } = useRoute<RouteProp<RootStackParamList>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IForm> = async data => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      await Services.createReservation({
        first_name: data.firstName,
        last_name: data.lastName ?? '',
        email: data.email,
        phone_number: data.phoneNumber,
        table_id: [tableId ?? ''],
      });
      setError(false);
      setSuccess(true);
      setLoading(false);
      dispatch(fetchTableAvailabilities());
      dispatch(fetchRestaurantManagement());
    } catch (err) {
      setError(true);
      setSuccess(false);
      setLoading(false);
    }
  };

  const goBack = (): void => {
    navigation.goBack();
  };

  const goToReservation = () => {
    navigation.navigate('RestaurantManagement', {tableId});
  };

  return {
    onSubmit,
    tableId,
    goBack,
    handleSubmit,
    errors,
    control,
    error,
    loading,
    success,
    goToReservation,
  };
};
