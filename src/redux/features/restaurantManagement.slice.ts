// ========= Restaurant Management Slice
// import all packages
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

// import all types
import {
  IGetRestaurantManagementApiResponse,
  IRestaurantManagementRaw,
} from '../../types';
import Services from '../../services/Services';
import {IRestaurantManagementSliceStates} from '../../types/restaurantManagement.slice.types';
import {fetchTableAvailabilities} from './tableAvailbilities.slice';

const initialState: IRestaurantManagementSliceStates = {
  data: [
    {
      id: '',
      tableCode: '',
      reservations: [],
    },
  ],
  loading: false,
  error: false,
};

export const fetchRestaurantManagement = createAsyncThunk(
  'restaurantManagement/getRestaurantManagement',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await Services.getRestaurantManagement();
      return data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data ?? error.message);
    }
  },
);

export const deleteReservation = createAsyncThunk(
  'restaurantManagement/deleteReservation',
  async (reservationId: string, {rejectWithValue, dispatch}) => {
    try {
      const {data} = await Services.deleteReservation(reservationId);
      dispatch(fetchRestaurantManagement());
      dispatch(fetchTableAvailabilities());
      return data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data ?? error.message);
    }
  },
);

const restaurantManagementSlice = createSlice({
  name: 'restaurantManagement',
  initialState,
  reducers: {
    getRestaurantManagement(
      state,
      action: PayloadAction<IRestaurantManagementSliceStates>,
    ) {
      state.data = action.payload.data;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchRestaurantManagement.fulfilled,
      (
        state,
        action: PayloadAction<
          IGetRestaurantManagementApiResponse<IRestaurantManagementRaw>
        >,
      ) => {
        state.data = Array.isArray(action.payload.data)
          ? action.payload.data.map(item => ({
              id: item.id,
              tableCode: item.table_code,
              reservations: item.reservations.map(reservation => ({
                id: reservation.id,
                firstName: reservation.first_name,
                lastName: reservation.last_name,
                email: reservation.email,
                phoneNumber: reservation.phone_number,
              })),
            }))
          : [];
        state.loading = false;
        state.error = false;
      },
    );

    builder.addCase(fetchRestaurantManagement.pending, state => {
      state.error = false;
      state.loading = true;
    });

    builder.addCase(fetchRestaurantManagement.rejected, state => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(deleteReservation.pending, state => {
      state.loading = true;
    });

    builder.addCase(deleteReservation.fulfilled, state => {
      state.loading = false;
    });

    builder.addCase(deleteReservation.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const {getRestaurantManagement} = restaurantManagementSlice.actions;
export default restaurantManagementSlice.reducer;
