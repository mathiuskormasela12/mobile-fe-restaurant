// ========= Badge
// import all packages
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {IBadgeProps} from './types';
import style from './style';

export const Badge: React.FC<IBadgeProps> = props => {
  const {variant, children, onPress} = props;

  return (
    <TouchableOpacity
      disabled={onPress === undefined}
      onPress={onPress}
      style={[style.badge, style[variant]]}>
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};
