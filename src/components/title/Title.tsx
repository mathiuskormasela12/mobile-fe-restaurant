// ========== Title
// import all packages
import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';

// import styles
import style from './style';

export const Title: React.FC<PropsWithChildren> = props => {
  return <Text style={style.title}>{props.children}</Text>;
};
