import {useTheme} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {PressableProps, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {Icon, IconProps} from '../../icon';
import {Text} from '../../text';
import {BaseButton} from '../base-button';

const styles = StyleSheet.create({
  defaultStyle: {
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    columnGap: 4,
  },
});

type Props = PressableProps & {
  icon?: IconProps['name'];
  symbol?: React.ReactNode;
};

export const SecondaryButton = ({
  style,
  children,
  icon,
  symbol,
  ...props
}: Props) => {
  const {colors} = useTheme();
  const borderColor = props.disabled ? colors.disabled : colors.black;
  const color = props.disabled ? colors.disabled : colors.black;

  return (
    <BaseButton
      style={[
        styles.defaultStyle,
        {borderColor},
        style as StyleProp<ViewStyle>,
      ]}
      {...props}>
      <Text type="l_sm" style={{color}}>
        {children as ReactNode}
      </Text>
      {!!symbol && symbol}
      {!!icon && <Icon name={icon} color={color} />}
    </BaseButton>
  );
};
