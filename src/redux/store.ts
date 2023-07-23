// ========= Store
// import all packages
import {configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import rootReducer from './features';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PURGE, PERSIST, REGISTER, PAUSE, FLUSH, FLUSH],
      },
    });
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
