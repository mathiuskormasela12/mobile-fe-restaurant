// ========== Redux Wrapper
// import all packages
import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// import store
import {store, persistor} from '../redux/store';

export const ReduxWrapper: React.FC<PropsWithChildren> = props => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{props.children}</PersistGate>
    </Provider>
  );
};
