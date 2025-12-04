import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Platform,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

interface Props extends RNTextInputProps {
  disabled?: boolean; // disabled !== editable.
}

export const TextInput = ({style, disabled, ...props}: Props) => {
  const {colors} = useTheme();
  const color = disabled ? colors.disabled : colors.black;

  return (
    <RNTextInput
      placeholderTextColor={colors.disabled}
      style={[styles.defaultStyle, {color}, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    lineHeight: 20,
    paddingTop: Platform.OS === 'ios' ? -4 : 0,
    textAlignVertical: 'center',
    color: 'black',
  },
});
