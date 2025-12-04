import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TextInputProps, View, ViewProps} from 'react-native';

import Input from '../../../molecules/input';
import {Icon} from '../../icon';

interface SearchBarProps extends ViewProps {
  textInputProps?: TextInputProps;
  valueFormatter?: (value: string) => string;
  textInputType?: 'default' | 'bottom-sheet';
}

export const SearchBar = ({
  style,
  textInputProps,
  valueFormatter,
  textInputType = 'default',
  ...props
}: SearchBarProps) => {
  const {colors} = useTheme();

  const TextInputComponent =
    textInputType === 'bottom-sheet' ? BottomSheetTextInput : Input.Text;

  return (
    <View
      style={[styles.container, {borderColor: colors.black}, style]}
      {...props}>
      <TextInputComponent
        style={[styles.textInput, textInputProps?.style]}
        {...textInputProps}
      />

      <Icon name="search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 4,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    lineHeight: 20,
    height: 48,
    textAlignVertical: 'center',
    color: 'black',
    paddingHorizontal: 12,
  },
});
function useDescription(): {label: any; placeholder: any} {
  throw new Error('Function not implemented.');
}
