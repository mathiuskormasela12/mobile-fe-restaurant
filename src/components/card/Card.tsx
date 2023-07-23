// ========== Card
// import all packages
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// import all types
import {ICardProps} from './types';

// import style
import style from './style';

// import components
import {Badge} from '../badge/Badge';

export const Card: React.FC<ICardProps> = props => {
  return (
    <TouchableOpacity style={style.card} disabled={props.disabled}>
      <View style={style.header}>
        <Text style={style.title}>{props.title}</Text>
        <Text style={style.subtitle}>{props.subtitle}</Text>
        {props.secondaryText && (
          <Text style={style.secondaryText}>{props.secondaryText}</Text>
        )}
      </View>
      <View style={style.aside}>
        {props.badgeOnpress !== undefined ? (
          <Badge onPress={props.badgeOnpress} variant={props.variant}>
            {props.badgeTitle}
          </Badge>
        ) : (
          <Badge variant={props.variant}>{props.badgeTitle}</Badge>
        )}
      </View>
    </TouchableOpacity>
  );
};
