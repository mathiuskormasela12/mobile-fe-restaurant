// ========= Error State
// import all packages
import React from 'react';
import {Image, Text, View} from 'react-native';

// import assets
import errorImg from '../../assets/images/error-img.png';

// import style
import style from './style';

export const ErrorState: React.FC = () => {
  return (
    <View style={style.container}>
      <Image source={errorImg} style={style.img} />
      <Text style={style.text}>Something Went Wrong</Text>
    </View>
  );
};
