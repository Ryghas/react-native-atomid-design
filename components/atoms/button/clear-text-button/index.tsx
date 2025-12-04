import {useTheme} from '@react-navigation/native';
import React from 'react';
import {PressableProps, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {Icon} from '../../icon';
import {BaseButton} from '../base-button';

export const ClearTextButton = ({style, ...props}: PressableProps) => {
  const {colors} = useTheme();

  return (
    <BaseButton
      style={[styles.container, style as StyleProp<ViewStyle>]}
      {...props}>
      <Icon name="close-circle" size={24} color={colors.disabled} />
    </BaseButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
