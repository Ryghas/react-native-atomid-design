import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

interface Props extends ViewProps {
  type?: 'up' | 'down';
}

export const Triangle = ({type = 'up', style, ...props}: Props) => {
  const {colors} = useTheme();
  const transformStyle =
    type === 'down' ? {transform: [{rotate: '180deg'}]} : undefined;

  return (
    <View
      style={[
        styles.shape,
        {borderBottomColor: colors.white},
        transformStyle,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  shape: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});
