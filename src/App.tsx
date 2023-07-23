// ========== App
// import all packages
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import all screens
import {TableAvailability, RestaurantManagement} from './screens';

// import all components
import {ReduxWrapper} from './components';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <ReduxWrapper>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TableAvailability"
            component={TableAvailability}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RestaurantManagement"
            component={RestaurantManagement}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxWrapper>
  );
};

export default App;
