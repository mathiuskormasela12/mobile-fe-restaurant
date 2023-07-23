// ========= Table Availbilities Slice
// import all packages
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

// import all types
import {
  IGetTableAvailabilitiesApiResponse,
  ITableAvailabilitiesRaw,
  ITableAvailabilitiesSliceStates,
} from '../../types';
import Services from '../../services/Services';

const initialState: ITableAvailabilitiesSliceStates = {
  data: [],
  loading: false,
  error: false,
};

export const fetchTableAvailabilities = createAsyncThunk(
  'getTableAvailabilities',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await Services.getTableAvailabilities();
      return data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data ?? error.message);
    }
  },
);

const tableAvailbilitiesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getTableAvailbilities(
      state,
      action: PayloadAction<ITableAvailabilitiesSliceStates>,
    ) {
      state.data = action.payload.data;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchTableAvailabilities.fulfilled,
      (
        state,
        action: PayloadAction<
          IGetTableAvailabilitiesApiResponse<ITableAvailabilitiesRaw>
        >,
      ) => {
        state.data = Array.isArray(action.payload.data)
          ? action.payload.data.map(item => ({
              id: item.id,
              tableCode: item.table_code,
              location: item.location,
              isAvailable: item.is_available,
            }))
          : [];
        state.loading = false;
      },
    );

    builder.addCase(fetchTableAvailabilities.pending, state => {
      state.loading = true;
    });

    builder.addCase(fetchTableAvailabilities.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const {getTableAvailbilities} = tableAvailbilitiesSlice.actions;
export default tableAvailbilitiesSlice.reducer;
