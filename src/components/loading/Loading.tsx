// ========== Loading
// import all packages
import React, {
  Fragment,
  PropsWithChildren,
  useImperativeHandle,
  useState,
} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Colors} from '../../themes';

// import style
import style from './style';
import {generateSize} from '../../helpers';

export const Loading = React.forwardRef((props: PropsWithChildren, ref) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoading = (loadingParam: boolean): void => {
    setLoading(loadingParam);
  };

  useImperativeHandle(ref, () => ({
    loading,
    handleLoading,
  }));

  if (!loading) {
    return props.children;
  }

  return (
    <Fragment>
      <View style={style.container}>
        <ActivityIndicator
          size={generateSize(17, 'width')}
          color={Colors.primary}
          style={style.loading}
        />
        <Text style={style.text}>Please wait...</Text>
      </View>
      {!loading && props.children}
    </Fragment>
  );
});
