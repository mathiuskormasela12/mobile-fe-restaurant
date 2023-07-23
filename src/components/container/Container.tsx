// ========== Container
// import all packages
import React from 'react';
import {View} from 'react-native';

// import all types
import {IContainerProps} from '../../types';

// import style
import style from './style';

export const Container: React.FC<IContainerProps> = props => {
  const containerStyle =
    props.fullHeight === true ? style.containerFullHeight : style.container;

  return <View style={containerStyle}>{props.children}</View>;
};
