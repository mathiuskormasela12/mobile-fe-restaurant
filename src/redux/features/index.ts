// ========== Root Reducer
// import all packages
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import all reducers
import tableAvailbilitiesReducer from './tableAvailbilities.slice';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  blacklist: ['tableAvailbilitiesReducer'],
};

const rootReducer = combineReducers({
  tableAvailbilitiesReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
