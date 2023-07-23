// ========== Loading
// import all packages
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Colors} from '../../themes';

// import style
import style from './style';
import {generateSize} from '../../helpers';

export const Loading: React.FC = () => {
  return (
    <View style={style.container}>
      <ActivityIndicator
        size={generateSize(17, 'width')}
        color={Colors.primary}
        style={style.loading}
      />
      <Text style={style.text}>Please wait...</Text>
    </View>
  );
};
