// ========== Table Availability
// import all packages
import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';

// import all redux actions
import {increment} from '../redux/features/counter.slice';

// import all themes
import {Fonts} from '../themes';

// import env
import {MOBILE_API_URL as API_URL} from '@env';

// import all helpers
import {generateSize} from '../helpers';

const TableAvailability: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const counter: number = useSelector(
    (states: RootState) => states.counterReducer.value,
  );

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleIncrement}>
        <Text style={styles.title}>Text Availability {counter}</Text>
      </TouchableOpacity>
      <Text>{API_URL}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: generateSize(10, 'width'),
    fontFamily: Fonts.base,
  },
});

export default TableAvailability;
