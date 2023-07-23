// ========== Button
// import all packages
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

// import all types
import {IButtonProps} from '../../types';

// import style
import style from './style';

export const Button: React.FC<IButtonProps> = props => {
  const {children, ...rest} = props;

  return (
    <TouchableOpacity style={style.btn} {...rest}>
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};
