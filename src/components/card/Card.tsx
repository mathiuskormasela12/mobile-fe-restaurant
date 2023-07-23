// ========== Card
// import all packages
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// import all types
import {ICardProps} from './types';
import style from './style';
import {Badge} from '../badge/Badge';

export const Card: React.FC<ICardProps> = props => {
  return (
    <TouchableOpacity style={style.card} disabled={!props.isAvailable}>
      <View style={style.header}>
        <Text style={style.tableCode}>{props.tableCode}</Text>
        <Text style={style.location}>{props.location}</Text>
      </View>
      <View style={style.aside}>
        <Badge variant={props.isAvailable ? 'primary' : 'danger'}>
          {props.isAvailable ? 'Available' : 'Unavailable'}
        </Badge>
      </View>
    </TouchableOpacity>
  );
};
