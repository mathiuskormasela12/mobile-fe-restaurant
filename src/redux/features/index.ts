// ========== Root Reducer
// import all packages
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import all reducers
import counterReducer from './counter.slice';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  blacklist: ['counterReducer'],
};

const rootReducer = combineReducers({
  counterReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
