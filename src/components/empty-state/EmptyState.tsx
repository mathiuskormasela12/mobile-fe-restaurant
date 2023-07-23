// ========= Empty State
// import all packages
import React from 'react';
import {Image, Text, View} from 'react-native';

// import assets
import emptyStateImg from '../../assets/images/empty-state.png';

// import style
import style from './style';

export const EmptyState: React.FC = () => {
  return (
    <View style={style.container}>
      <Image source={emptyStateImg} style={style.img} />
      <Text style={style.text}>No Tables Found</Text>
    </View>
  );
};
