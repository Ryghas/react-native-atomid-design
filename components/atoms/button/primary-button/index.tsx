import {useTheme} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {PressableProps, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {Icon, IconProps} from '../../icon';
import {Text} from '../../text';
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
});

type Props = PressableProps & {
  size?: 'normal' | 'small';
  variant?: 'default' | 'bottom-sheet';
  icon?: IconProps['name'];
  symbol?: React.ReactNode;
};

export const PrimaryButton = ({
  style,
  size = 'normal',
  variant = 'default',
  icon,
  symbol,
  children,
  ...props
}: Props) => {
  const {colors} = useTheme();
  const fontSize = size === 'normal' ? 'l_sm' : 'm_sm';
  const backgroundColor = props.disabled
    ? colors.disabled
    : variant === 'bottom-sheet'
    ? colors.black
    : colors.red;

  return (
    <BaseButton
      android_ripple={{
        color: `${colors.white}33`,
      }}
      style={[
        styles.defaultStyle,
        styles[size],
        {backgroundColor},
        style as StyleProp<ViewStyle>,
      ]}
      {...props}>
      <Text type={fontSize} style={{color: colors.white}}>
        {children as ReactNode}
      </Text>
      {!!symbol && symbol}
      {!!icon && <Icon name={icon} color={colors.white} />}
    </BaseButton>
  );
};
