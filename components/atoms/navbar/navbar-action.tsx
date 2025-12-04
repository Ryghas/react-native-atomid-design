import React from 'react';
import {PressableProps, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {BaseButton} from '../button';

export const NavbarAction = ({style, ...props}: PressableProps) => {
  return (
    <BaseButton
      style={[styles.container, style as StyleProp<ViewStyle>]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 56,
    height: 56,
    borderRadius: 28,
    paddingHorizontal: 16,
    columnGap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
