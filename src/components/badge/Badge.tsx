// ========= Badge
// import all packages
import React from 'react';
import {View, Text} from 'react-native';
import {IBadgeProps} from './types';
import style from './style';

export const Badge: React.FC<IBadgeProps> = props => {
  const {variant, children} = props;

  return (
    <View style={[style.badge, style[variant]]}>
      <Text style={style.text}>{children}</Text>
    </View>
  );
};
