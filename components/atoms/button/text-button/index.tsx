import {useTheme} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {PressableProps, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {Icon, IconProps} from '../../icon';
import {Text, TextProps} from '../../text';
import {BaseButton} from '../base-button';

const styles = StyleSheet.create({
  defaultStyle: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 4,
  },
  normal: {
    height: 48,
  },
  small: {
    height: 36,
  },
  tiny: {
    height: 32,
  },
});

type Props = PressableProps & {
  size?: 'normal' | 'small' | 'tiny';
  iconProps?: IconProps;
  textProps?: TextProps;
};

export const TextButton = ({
  style,
  size = 'normal',
  iconProps,
  textProps,
  children,
  ...props
}: Props) => {
  const {colors} = useTheme();
  const type = size === 'small' ? 'm_sm' : 'l_sm';

  return (
    <BaseButton
      android_ripple={{
        color: `${colors.disabled}33`,
        borderless: true,
      }}
      style={[styles.defaultStyle, styles[size], style as StyleProp<ViewStyle>]}
      {...props}>
      <Text type={type} {...textProps}>
        {children as ReactNode}
      </Text>

      {!!iconProps?.name && <Icon {...iconProps} />}
    </BaseButton>
  );
};
