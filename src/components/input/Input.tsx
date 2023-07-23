// ========= Input
// import all packages
import React from 'react';
import {TextInput, View, Text} from 'react-native';

// import style
import style from './style';

// import all types
import {IInputProps} from './types';

export const Input: React.FC<IInputProps> = props => {
  return (
    <View style={style.container}>
      <TextInput
        style={[
          style.input,
          props?.error?.length ? style.inputError : style.inputNormal,
        ]}
        value={props.value}
        onChangeText={props.onChange}
        placeholder={props.placeholder}
        keyboardType={props.type}
      />
      {props?.error?.length && <Text style={style.error}>{props.error}</Text>}
    </View>
  );
};
