// ========= Counter Slice
// import all packages
import {createSlice} from '@reduxjs/toolkit';

// import all types
import {ICounterSliceStates} from '../../types';

const initialState: ICounterSliceStates = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
  },
});

export const {increment} = counterSlice.actions;
export default counterSlice.reducer;
